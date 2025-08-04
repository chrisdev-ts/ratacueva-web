"use client";

import React, { useState, useMemo } from "react";
import { Body, Display, Heading } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import StatusTag from "@/components/features/dashboard/atoms/StatusTag";
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import { ColumnDef } from "@tanstack/react-table";
import { useSales } from "@/hook/dashboard/useSales";
import { Sale } from "@/lib/salesData";
import Link from "next/link";

export default function Sales() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const { data: sales, isLoading, error } = useSales();

    const filteredSales = useMemo(() => {
        if (!sales) return [];

        return sales.filter(sale =>
            sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.shippingCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.totalPrice.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.payMethod.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [sales, searchTerm]);

    const totalRecords = filteredSales.length;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalRecords);

    const paginatedSales = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredSales.slice(startIndex, endIndex);
    }, [filteredSales, currentPage, itemsPerPage]);

    const columns: ColumnDef<Sale>[] = [
        {
            accessorKey: "id",
            header: "SALE ID",
            cell: info => (
                <Link href={`/sales/${info.getValue()}`} className="text-text underline hover:no-underline transition-all">
                    <Body className="text-current">{String(info.getValue())}</Body>
                </Link>
            ),
        },
        {
            accessorKey: "customerName",
            header: "CUSTOMER NAME",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "shippingCity",
            header: "SHIPPING CITY",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "totalPrice",
            header: "TOTAL PRICE",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "status",
            header: "STATUS",
            cell: info => {
                const status = info.getValue() as Sale["status"];
                return <StatusTag status={status} />;
            }
        },
        {
            accessorKey: "payMethod",
            header: "PAY METHOD",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
    ];

    const generatePaginationItems = () => {
        const items: (string | number)[] = ["«", "‹"];

        // Show first few pages, current page area, and last few pages
        const showPages = Math.min(6, totalPages);

        if (totalPages <= 6) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                items.push(i);
            }
        } else {
            // Show smart pagination
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    items.push(i);
                }
                if (totalPages > 5) items.push("...");
                items.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                items.push(1);
                if (totalPages > 5) items.push("...");
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    items.push(i);
                }
            } else {
                items.push(1);
                items.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    items.push(i);
                }
                items.push("...");
                items.push(totalPages);
            }
        }

        items.push("›", "»");
        return items;
    };

    return (
            <DashboardContentLayout>
                <div className="flex justify-between items-center pb-3">
                    <Heading>Administrar ventas</Heading>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center flex-wrap gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 border border-border rounded-2xl px-4 py-2.5 cursor-pointer">
                                <Body className="text-placeholder">{itemsPerPage}</Body>
                                <ChevronDownIcon className="w-6 h-6 text-placeholder" />
                            </div>
                            <Body className="text-text whitespace-nowrap">entradas por página</Body>
                        </div>
                        <div className="w-[341px] relative min-w-[240px]">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-placeholder pointer-events-none" />
                            <Input
                                variant="searchbar"
                                type="text"
                                placeholder="Buscar venta..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12"/>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="bg-gray rounded-lg p-8 text-center">
                            <Body className="text-placeholder">Cargando ventas...</Body>
                        </div>
                    ) : error ? (
                        <div className="bg-gray rounded-lg p-8 text-center">
                            <Body className="text-danger">Error al cargar ventas</Body>
                        </div>
                    ) : (
                        <BaseTable data={paginatedSales} columns={columns} />
                    )}

                    <div className="flex justify-between items-center flex-wrap gap-6">
                        <Body className="text-text">
                            Mostrando {totalRecords > 0 ? startItem : 0} de {itemsPerPage} en {totalRecords} registros
                        </Body>

                        <div className="flex items-center gap-1">
                            {generatePaginationItems().map((label, i) => (
                                <Button
                                    key={i}
                                    variant="pagination"
                                    onClick={() => {
                                        if (label === "«") setCurrentPage(1);
                                        else if (label === "‹" && currentPage > 1) setCurrentPage(currentPage - 1);
                                        else if (label === "›" && currentPage < totalPages) setCurrentPage(currentPage + 1);
                                        else if (label === "»") setCurrentPage(totalPages);
                                        else if (typeof label === "number") setCurrentPage(label);
                                    }}
                                    disabled={
                                        (label === "«" && currentPage === 1) ||
                                        (label === "‹" && currentPage === 1) ||
                                        (label === "›" && currentPage === totalPages) ||
                                        (label === "»" && currentPage === totalPages) ||
                                        label === "..."
                                    }
                                    className={`${currentPage === label ? "bg-gray" : ""} ${label === "..." ? "cursor-default" : ""}`}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </DashboardContentLayout>
    );
}

"use client";

import React, { useState, useMemo } from "react";
import { Body, Display, Heading } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import StatusTag, { mapOrderStatusToStatusType } from "@/components/features/dashboard/atoms/StatusTag";
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Sale, useSales } from "@/hook/dashboard/useSales";

export default function Sales() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const { data: sales, isLoading, error } = useSales();

    const filteredSales = useMemo(() => {
        if (!sales) return [];

        const term = searchTerm.toLowerCase();

        return sales.filter(sale => {
            const id = sale._id ?? "";
            const customerName = `${sale.userId?.name ?? ""} ${sale.userId?.lastName ?? ""}`;
            const shippingCity = sale.shippingAddress?.city ?? "";
            const totalPrice = String(sale.totalAmount ?? "");
            const payMethod = sale.paymentDetails?.type ?? "";

            return (
                id.toLowerCase().includes(term) ||
                customerName.toLowerCase().includes(term) ||
                shippingCity.toLowerCase().includes(term) ||
                totalPrice.toLowerCase().includes(term) ||
                payMethod.toLowerCase().includes(term)
            );
        });
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

    console.log("sales:", sales);
    console.log("filteredSales:", filteredSales);
    console.log("paginatedSales:", paginatedSales);

    const paymentMethodLabels: Record<string, string> = {
        credit_card: "Tarjeta de crédito o débito",
        debit_card: "Tarjeta de crédito o débito", // si quieres que debit_card sea igual que credit_card
        paypal: "Paypal",
        oxxo_cash: "Oxxo",
        cash: "Efectivo", // si existe cash o algo similar
    };

    const columns: ColumnDef<Sale>[] = [
        {
            accessorKey: "_id",
            header: "SALE ID",
            size: 122,
            cell: info => (
                <Link href={`/sales/${info.getValue()}`} className="text-text underline hover:no-underline transition-all">
                    <Body className="text-current truncate max-w-[120px]">{String(info.getValue())}</Body>
                </Link>
            ),
        },
        {
            id: "customerName",
            header: "CUSTOMER NAME",
            size: 122,
            cell: info => {
                const sale = info.row.original;
                return (
                    <Body className="text-text truncate max-w-[120px]">
                        {sale.userId ? `${sale.userId.name} ${sale.userId.lastName}` : ""}
                    </Body>
                );
            }
        },
        {
            accessorKey: "shippingAddress.city",
            header: "SHIPPING CITY",
            size: 122,
            cell: info => (
                <Body className="text-text truncate max-w-[120px]">{String(info.getValue() || "")}</Body>
            ),
        },
        {
            accessorKey: "totalAmount",
            header: "TOTAL PRICE",
            size: 122,
            cell: info => (
                <Body className="text-text truncate max-w-[120px]">{String(info.getValue())}</Body>
            ),
        },
        {
            accessorKey: "orderStatus",
            header: "STATUS",
            size: 122,
            cell: info => {
                const rawStatus = info.getValue() as string;
                const status = mapOrderStatusToStatusType(rawStatus);
                return <StatusTag status={status} />;
            }
        },
        {
            accessorKey: "paymentDetails.type",
            header: "PAY METHOD",
            size: 122,
            cell: (info) => {
                const method = info.getValue() as string;
                const label = paymentMethodLabels[method] ?? method;
                return <Body className="text-text truncate max-w-[120px]">{label}</Body>;
            },
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
                            className="pl-12" />
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

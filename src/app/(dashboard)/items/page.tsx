"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Body, Display } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import StatusTag from "@/components/features/dashboard/atoms/StatusTag";
import {
    PencilSquareIcon,
    TrashIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

const mockProducts = Array.from({ length: 10 }, (_, i) => ({
    id: `PROD00${i + 1}`,
    name: "Gaming PC Xtreme",
    category: "Hardware",
    type: "Physical",
    stock: 85,
    price: "2025-06-20",
    status: "Completed" as const,
}));

export default function Items() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const totalRecords = 57;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    // Column definitions for BaseTable
    const columns: ColumnDef<typeof mockProducts[0]>[] = [
        {
            accessorKey: "id",
            header: "ID",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>
        },
        {
            accessorKey: "name",
            header: "PRODUCT NAME",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>
        },
        {
            accessorKey: "category",
            header: "CATEGORY",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>
        },
        {
            accessorKey: "type",
            header: "TYPE",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>
        },
        {
            accessorKey: "stock",
            header: "STOCK/KEYS",
            cell: info => (
                <div className="bg-success text-success-dark px-3 py-2 rounded-full font-bold text-body-small inline-flex items-center justify-center">
                    {String(info.getValue())}
                </div>
            )
        },
        {
            accessorKey: "price",
            header: "PRICE",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>
        },
        {
            accessorKey: "status",
            header: "STATUS",
            cell: info => (
                <StatusTag status={String(info.getValue()).toLowerCase() as "completed" | "pending" | "processing" | "cancelled"} />
            )
        },
        {
            id: "actions",
            header: "ACTIONS",
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <Button variant="icon">
                        <PencilSquareIcon className="w-6 h-6 text-warning" />
                    </Button>
                    <Button variant="icon">
                        <TrashIcon className="w-6 h-6 text-danger" />
                    </Button>
                </div>
            )
        }
    ];

    return (
        <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 text-text font-body">
            <DashboardContentLayout>
                <div className="flex justify-between items-center pb-3">
                    <Display>Administrar productos</Display>
                    <Link href="/items/add">
                        <Button variant="success" className="px-4 py-2.5 rounded-full font-bold text-body flex items-center gap-2">
                            Agregar producto
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center py-1">
                            <div className="flex items-center gap-3 border border-border rounded-2xl px-4 py-2.5 cursor-pointer">
                                <Body className="text-placeholder">{itemsPerPage}</Body>
                                <ChevronDownIcon className="w-6 h-6 text-placeholder" />
                            </div>
                            <Body className="text-text p-2">entradas por página</Body>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5 w-[341px]">
                            <MagnifyingGlassIcon className="w-6 h-6 text-text" />
                            <Input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent text-text placeholder-placeholder outline-none flex-1 text-body"
                            />
                        </div>
                    </div>

                    <BaseTable data={mockProducts.slice(0, itemsPerPage)} columns={columns} />

                    <div className="flex justify-between items-center">
                        <Body className="text-text">
                            Mostrando 1 de {itemsPerPage} en {totalRecords} registros
                        </Body>

                        <div className="flex items-center gap-1">
                            {["«", "‹", ...Array.from({ length: totalPages }, (_, i) => i + 1), "›", "»"]
                                .map((label, i) => (
                                    <Button
                                        key={i}
                                        variant="pagination"
                                        onClick={() => typeof label === "number" && setCurrentPage(label)}
                                        className={currentPage === label ? "bg-gray" : ""}
                                    >
                                        {label}
                                    </Button>
                                ))}
                        </div>
                    </div>
                </div>
            </DashboardContentLayout>
        </div>
    );
}

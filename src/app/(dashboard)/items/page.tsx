"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Body, Display } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import StatusTag, { getStockStatus } from "@/components/features/dashboard/atoms/StatusTag";
import {
    PencilSquareIcon,
    TrashIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { useProducts } from "@/hook/dashboard/useProduct";

export default function Items() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");


    const { data: products, isLoading, error } = useProducts();

    const totalRecords = products?.length ?? 0;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalRecords);


    const columns: ColumnDef<any>[] = [
        {
            accessorKey: "name",
            header: "PRODUCT NAME",
            cell: info => (
                <Link href={`/items/${info.row.original.id || info.row.index}`} className="text-text underline hover:no-underline transition-all">
                    <Body className="text-current">{String(info.getValue())}</Body>
                </Link>
            ),
        },
        {
            accessorKey: "category",
            header: "CATEGORY",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        // Si 'type' no existe, elimina o cambia a otro campo válido:
        // {
        //   accessorKey: "subcategory",
        //   header: "SUBCATEGORY",
        //   cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        // },
        {
            accessorKey: "stock",
            header: "STOCK/KEYS",
            cell: info => {
                const stock = info.getValue() as number;
                const status = getStockStatus(stock);
                return <StatusTag status={status}>{stock}</StatusTag>;
            }
        },
        {
            accessorKey: "price",
            header: "PRICE",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        // Elimina si no tienes status o adapta:
        // {
        //   accessorKey: "stock",
        //   header: "STATUS",
        //   cell: info => (
        //     <StatusTag status={info.getValue() > 0 ? "completed" : "cancelled"} />
        //   ),
        // },
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
            ),
        },
    ];

    return (
        <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 text-text font-body">
            <DashboardContentLayout>
                <div className="flex justify-between items-center pb-3">
                    <Display>Administrar productos</Display>
                    <Link href="/items/add">
                        <Button
                            variant="success"
                            className="px-4 py-2.5 rounded-full font-bold text-body flex items-center gap-2">
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
                        <div className="w-[341px] relative">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-placeholder pointer-events-none" />
                            <Input
                                variant="searchbar"
                                type="text"
                                placeholder="Buscar producto..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"/>
                        </div>
                    </div>

                    {/* Aquí renderizamos la tabla con datos de la API */}
                    {isLoading ? (
                        <p className="text-gray-400">Cargando productos...</p>
                    ) : error ? (
                        <p className="text-red-400">Error al cargar productos</p>
                    ) : (
                        <BaseTable data={products ?? []} columns={columns} />
                    )}

                    <div className="flex justify-between items-center flex-wrap gap-6">
                        <Body className="text-text">
                            Mostrando {startItem} - {endItem} de {totalRecords} registros
                        </Body>

                        <div className="flex items-center gap-1">
                            {["«", "‹", ...Array.from({ length: totalPages }, (_, i) => i + 1), "›", "»"].map(
                                (label, i) => (
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
                                        className={currentPage === label ? "bg-gray" : ""}>
                                        {label}
                                    </Button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </DashboardContentLayout>
        </div>
    );
}

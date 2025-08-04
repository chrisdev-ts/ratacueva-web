"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Body, Display, Heading } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import StatusTag from "@/components/features/dashboard/atoms/StatusTag";
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import { ColumnDef } from "@tanstack/react-table";
import { useShipments } from "@/hook/dashboard/useShipments";

interface Shipment {
    id: string;
    trackingNumber: string;
    carrier: string;
    destination: string;
    status: "completed" | "pending" | "processing" | "cancelled";
    createdAt: string;
}

export default function Shipments() {
    const { data: shipments = [], isLoading, error } = useShipments();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    // Filtrado local (puedes hacerlo en backend luego)
    const filteredShipments = shipments.filter((shipment) =>
        shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.carrier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalRecords = filteredShipments.length;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);
    const startItem = totalRecords === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalRecords);

    const paginatedShipments = filteredShipments.slice(startItem - 1, endItem);

    const columns: ColumnDef<Shipment>[] = [
        {
            accessorKey: "id",
            header: "SHIPMENT ID",
            cell: (info) => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "trackingNumber",
            header: "TRACK NO.",
            cell: (info) => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "carrier",
            header: "CARRIER",
            cell: (info) => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "destination",
            header: "DESTINATION",
            cell: (info) => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "status",
            header: "STATUS",
            cell: (info) => {
                const status = info.getValue() as "completed" | "pending" | "processing" | "cancelled";
                return <StatusTag status={status} />;
            },
        },
        {
            accessorKey: "createdAt",
            header: "CREATED AT",
            cell: (info) => <Body className="text-text">{String(info.getValue())}</Body>,
        },
    ];

    return (
        <DashboardContentLayout>
            <div className="flex justify-between items-center pb-3">
                <Heading>Administrar envíos</Heading>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center flex-wrap gap-6">
                    <div className="flex items-center py-1">
                        <div className="flex items-center gap-3 border border-border rounded-2xl px-4 py-2.5 cursor-pointer">
                            <Body className="text-placeholder">{itemsPerPage}</Body>
                            <ChevronDownIcon className="w-6 h-6 text-placeholder" />
                        </div>
                        <Body className="text-text p-2">entradas por página</Body>
                    </div>
                    <div className="w-[341px] min-w-[240px] relative">
                        <MagnifyingGlassIcon
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-placeholder pointer-events-none"
                        />
                        <Input
                            variant="searchbar"
                            type="text"
                            placeholder="Buscar envío..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                <BaseTable data={paginatedShipments} columns={columns} />

                <div className="flex justify-between items-center flex-wrap gap-6">
                    <Body className="text-text">
                        Mostrando {startItem} - {endItem} de {totalRecords} registros
                    </Body>

                    <div className="flex items-center gap-1">
                        {[
                            "«",
                            "‹",
                            ...Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1),
                            "›",
                            "»",
                        ].map((label, i) => (
                            <Button
                                key={i}
                                variant="pagination"
                                onClick={() => {
                                    if (label === "«") setCurrentPage(1);
                                    else if (label === "‹" && currentPage > 1)
                                        setCurrentPage(currentPage - 1);
                                    else if (label === "›" && currentPage < totalPages)
                                        setCurrentPage(currentPage + 1);
                                    else if (label === "»") setCurrentPage(totalPages);
                                    else if (typeof label === "number") setCurrentPage(label);
                                }}
                                className={currentPage === label ? "bg-gray" : ""}
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

"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Body, Display } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import {
    TrashIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

interface Employee {
    id: string;
    name: string;
    phone: string;
    email: string;
    city: string;
}


// Mock data for employees - replace with actual API data
const mockEmployees = [
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
    {
        id: "688ab10d8dfb0",
        name: "Emanuel Najera",
        phone: "2711234567",
        email: "emanuel@ejemplo.com",
        city: "Mexico City",
    },
];

export default function Employers() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");



    // Filter employees based on search term
    const filteredEmployees = mockEmployees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.phone.includes(searchTerm) ||
        employee.id.includes(searchTerm)
    );

    const totalRecords = filteredEmployees.length;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalRecords);

    // Get current page data
    const currentData = filteredEmployees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const columns: ColumnDef<any>[] = [
        {
            accessorKey: "id",
            header: "EMPLOYEE ID",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "name",
            header: "NAME",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "phone",
            header: "PHONE NUMBER",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "email",
            header: "EMAIL",
            size: 120,
            cell: info => <Body className="text-text truncate max-w-[120px]">{String(info.getValue())}</Body>,
        },
        {
            accessorKey: "city",
            header: "CITY",
            cell: info => <Body className="text-text">{String(info.getValue())}</Body>,
        },
        {
            id: "actions",
            header: "ACTIONS",
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <Button variant="icon" onClick={() => handleDeleteEmployee(row.original.id)}>
                        <TrashIcon className="w-6 h-6 text-danger" />
                    </Button>
                </div>
            ),
        },
    ];

    const handleDeleteEmployee = (employeeId: string) => {
        // Add delete functionality here
        console.log("Delete employee:", employeeId);
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 text-text font-body">
            <DashboardContentLayout>
                <div className="flex justify-between items-center pb-3">
                    <Display>Administrar empleados</Display>
                    <Link href="/employers/add">
                        <Button
                            variant="success"
                            className="px-4 py-3 rounded-full font-bold text-dark flex items-center gap-3">
                            Agregar empleado
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center flex-wrap gap-6">
                        <div className="flex items-center py-1">
                            <div className="flex items-center gap-3 border border-border rounded-2xl px-4 py-2.5 cursor-pointer min-w-[240px]">
                                <Body className="text-placeholder">{itemsPerPage}</Body>
                                <ChevronDownIcon className="w-6 h-6 text-placeholder" />
                            </div>
                            <Body className="text-text p-2">entradas por página</Body>
                        </div>
                        <div className="w-[341px] min-w-[240px] relative">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-placeholder pointer-events-none" />
                            <Input
                                variant="searchbar"
                                type="text"
                                placeholder="Buscar empleados..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <BaseTable columns={columns} data={currentData} />

                    <div className="flex justify-between items-center flex-wrap gap-6">
                        <Body className="text-text">
                            Mostrando {startItem} de {itemsPerPage} en {totalRecords} registros
                        </Body>

                        <div className="flex items-center gap-1">
                            {["«", "‹", ...Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1), "›", "»"].map(
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

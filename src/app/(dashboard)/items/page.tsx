"use client";

import React, { useState } from "react";
import { Heading, Body, Display } from "@/components/atoms/Typography";

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712Z" fill="#FFC71D" />
        <path d="M19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" fill="#FFC71D" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" fill="#FFC71D" />
    </svg>
);

const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6">
        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" fill="#FF3737" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10L12 15L7 10" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

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

    return (
        <main className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 bg-dark text-text font-body">
            <div className="flex justify-between items-center">
                <Display>Administrar productos</Display>
                <button className="bg-success text-success-dark px-4 py-2.5 rounded-full font-bold text-body hover:bg-success/90 transition-colors cursor-pointer">
                    Agregar producto
                </button>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 border border-border rounded-2xl px-4 py-2.5 cursor-pointer">
                            <Body className="text-placeholder">{itemsPerPage}</Body>
                            <ChevronDownIcon />
                        </div>
                        <Body className="text-text">entradas por página</Body>
                    </div>

                    <div className="flex items-center gap-3 border border-border rounded-2xl px-4 py-2.5 w-[341px]">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent text-text placeholder-placeholder outline-none flex-1 text-body"
                        />
                    </div>
                </div>

                <div className="bg-gray rounded-lg overflow-hidden">
                    <div className="flex gap-4 px-6 py-5 border-b-2 border-dark">
                        {["ID", "PRODUCT NAME", "CATEGORY", "TYPE", "STOCK/KEYS", "PRICE", "STATUS", "ACTIONS"].map((header) => (
                            <div key={header} className="flex-1">
                                <Body className="text-text font-bold uppercase">{header}</Body>
                            </div>
                        ))}
                    </div>

                    {mockProducts.slice(0, itemsPerPage).map((product, index) => (
                        <div key={index} className="flex gap-4 px-6 py-4 border-b border-dark last:border-b-0">
                            {["id", "name", "category", "type"].map((field) => (
                                <div key={field} className="flex-1">
                                    <Body className="text-text">{product[field as keyof typeof product]}</Body>
                                </div>
                            ))}
                            <div className="flex-1">
                                <div className="bg-success text-success-dark px-3 py-2 rounded-full font-bold text-body-small inline-flex items-center justify-center">
                                    {product.stock}
                                </div>
                            </div>
                            <div className="flex-1">
                                <Body className="text-text">{product.price}</Body>
                            </div>
                            <div className="flex-1">
                                <div className="bg-success text-success-dark px-3 py-2 rounded-full font-bold text-body-small inline-flex items-center justify-center">
                                    {product.status}
                                </div>
                            </div>
                            <div className="flex-1 flex items-center gap-2">
                                <button className="p-1 hover:bg-dark rounded transition-colors">
                                    <EditIcon />
                                </button>
                                <button className="p-1 hover:bg-dark rounded transition-colors">
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <Body className="text-text">
                        Mostrando 1 de {itemsPerPage} en {totalRecords} registros
                    </Body>

                    <div className="flex items-center gap-1">
                        {["«", "‹", ...Array.from({ length: totalPages }, (_, i) => i + 1), "›", "»"].slice(0, 8).map((label, i) => (
                            <button
                                key={i}
                                onClick={() => typeof label === "number" && setCurrentPage(label)}
                                className={`w-[42px] h-[42px] flex items-center justify-center border border-gray rounded-lg text-text hover:bg-gray transition-colors cursor-pointer ${currentPage === label ? "bg-gray" : ""}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

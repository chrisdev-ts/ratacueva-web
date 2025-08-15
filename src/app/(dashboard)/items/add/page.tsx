"use client";

import React, { useState } from "react";
import { Body, Caption, Display } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Textarea from "@/components/atoms/Textarea";
import {
    DocumentArrowDownIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        model: "",
        inventory: "",
        description: "",
        image: null as File | null,
    });

    const [dragActive, setDragActive] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === "dragenter" || e.type === "dragover");
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        if (file) setFormData((prev) => ({ ...prev, image: file }));
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFormData((prev) => ({ ...prev, image: file }));
    };

    return (
        <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 flex-1 bg-[#1A1A1A] text-white font-body">
            <DashboardContentLayout>
            <Display>Agregar producto</Display>

            <div className="flex-1 bg-[#2F2F2F] rounded-lg p-8 flex flex-col">
                <div className="flex flex-col gap-6 flex-1">
                    {/* Nombre y Categoría */}
                    <div className="flex gap-6">
                        <div className="flex-1 flex flex-col gap-4">
                            <Body>Nombre del producto *</Body>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Ej: RTX 2030"/>
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <Body>Categoría</Body>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white text-body outline-none focus:border-[#00FF95] transition-colors min-h-[44px] w-full appearance-none cursor-pointer">
                                    <option value="" className="text-[#9A9A9A]">
                                        Ej: Componentes
                                    </option>
                                    <option value="componentes">Componentes</option>
                                    <option value="hardware">Hardware</option>
                                    <option value="software">Software</option>
                                </select>
                                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Precio y Modelo */}
                    <div className="flex gap-6">
                        <div className="flex-1 flex flex-col gap-4">
                            <Body>Precio *</Body>
                            <Input
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="Ej: 15000"/>
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <Body>Modelo *</Body>
                            <Input
                                name="model"
                                value={formData.model}
                                onChange={handleInputChange}
                                placeholder="Ej: NVIDIA Geforce"/>
                        </div>
                    </div>

                    {/* Inventario */}
                    <div className="flex flex-col gap-4">
                        <Body>Inventario *</Body>
                        <Input
                            name="inventory"
                            value={formData.inventory}
                            onChange={handleInputChange}
                            placeholder="Ej: 276"
                            className="max-w-[455px]"/>
                    </div>

                    {/* Descripción */}
                    <div className="flex flex-col gap-4">
                        <Body>Descripción *</Body>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Ej: Tarjeta gráfica ideal para gaming y productividad."/>
                    </div>

                    {/* Imagen */}
                    <div className="flex flex-col gap-4">
                        <Body>Imagen del producto *</Body>
                        <div
                            className={`border-2 border-dashed border-[#555] rounded-lg bg-[#2F2F2F] p-6 flex flex-col items-center justify-center gap-4 min-h-[176px] transition-colors cursor-pointer ${dragActive ? "border-[#00FF95] bg-[#1A1A1A]" : ""
                                }`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => document.getElementById("file-input")?.click()}>
                            <input
                                id="file-input"
                                type="file"
                                accept=".jpg,.jpeg,.png,.webp"
                                onChange={handleFileSelect}
                                className="hidden"/>
                            <DocumentArrowDownIcon className="text-white w-12 h-12" />
                            <div className="flex flex-col items-center gap-2">
                                <Body className="text-white font-bold text-center">
                                    Arrastra una imagen<br />o haz clic
                                </Body>
                                <Caption className="text-white text-center">
                                    Sube al menos 1 foto del producto. Se admiten 6 fotos en total.
                                </Caption>
                                <Caption className="text-white text-center">
                                    JPEG, JPG, PNG O WEBP
                                </Caption>
                            </div>
                            {formData.image && (
                                <div className="mt-2">
                                    <Caption className="text-[#00FF95]">
                                        Archivo seleccionado: {formData.image.name}
                                    </Caption>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex items-center gap-6 mt-8 justify-end">
                    <Button variant="danger">Cancelar</Button>
                    <Button variant="success">Agregar producto</Button>
                </div>
            </div>
                        </DashboardContentLayout>
        </div>
    );
}

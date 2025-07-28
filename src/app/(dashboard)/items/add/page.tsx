"use client";

import React, { useState } from "react";
import { Heading, Body, Caption, Display } from "@/components/atoms/Typography";

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        model: "",
        inventory: "",
        description: "",
        image: null as File | null
    });

    const [dragActive, setDragActive] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const files = e.dataTransfer.files;
        if (files && files[0]) {
            setFormData(prev => ({
                ...prev,
                image: files[0]
            }));
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setFormData(prev => ({
                ...prev,
                image: files[0]
            }));
        }
    };

    const FileIcon = () => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16L28 4ZM18.478 32.892C18.478 35.196 17.376 36 15.602 36C15.182 36 14.63 35.928 14.272 35.806L14.474 34.332C14.728 34.416 15.052 34.476 15.412 34.476C16.18 34.476 16.658 34.128 16.658 32.868V27.782H18.48L18.478 32.892ZM25.066 32.162C24.44 32.748 23.52 33.014 22.44 33.014C22.2 33.014 21.984 33 21.816 32.976V35.866H20.004V27.89C20.822 27.7666 21.6488 27.7111 22.476 27.724C23.602 27.724 24.406 27.938 24.944 28.37C25.462 28.778 25.81 29.45 25.81 30.242C25.81 31.034 25.544 31.706 25.066 32.162ZM33.728 35.496C33.168 35.688 32.098 35.952 31.03 35.952C29.556 35.952 28.488 35.58 27.744 34.86C27.002 34.164 26.594 33.11 26.604 31.922C26.618 29.234 28.57 27.7 31.222 27.7C32.264 27.7 33.07 27.906 33.464 28.096L33.082 29.558C32.638 29.366 32.088 29.21 31.2 29.21C29.678 29.21 28.524 30.074 28.524 31.826C28.524 33.492 29.57 34.476 31.066 34.476C31.488 34.476 31.822 34.428 31.968 34.354V32.662H30.72V31.236H33.728V35.496ZM28 18H26V8L36 18H28Z" fill="white" />
            <path d="M22.5704 29.104C22.1984 29.104 21.9464 29.14 21.8164 29.176V31.562C21.9704 31.598 22.1644 31.608 22.4304 31.608C23.3984 31.608 23.9984 31.116 23.9984 30.29C23.9984 29.546 23.4844 29.104 22.5704 29.104Z" fill="white" />
        </svg>
    );

    const ChevronDownIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10L12 15L7 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <main className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 bg-[#1A1A1A] text-white font-body min-h-screen">
            {/* Page Title */}
            <Display>Agregar producto</Display>
            {/* Form Container */}
            <div className="flex-1 bg-[#2F2F2F] rounded-lg p-8 flex flex-col">
                <div className="flex flex-col gap-6 flex-1">
                    {/* First Row - Name and Category */}
                    <div className="flex gap-6">
                        <div className="flex-1 flex flex-col gap-4">
                            <Body className="text-white">Nombre del producto *</Body>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ej: RTX 2030" className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white placeholder-[#9A9A9A] text-body outline-none focus:border-[#00FF95] transition-colors min-h-[44px]" />
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <Body className="text-white">Categoria</Body>
                            <div className="relative">
                                <select name="category" value={formData.category} onChange={handleInputChange} className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white text-body outline-none focus:border-[#00FF95] transition-colors min-h-[44px] w-full appearance-none cursor-pointer">
                                    <option value="" className="text-[#9A9A9A]">Ej: Componentes</option>
                                    <option value="componentes">Componentes</option>
                                    <option value="hardware">Hardware</option>
                                    <option value="software">Software</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"><ChevronDownIcon /></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Price and Model */}
                    <div className="flex gap-6">
                        <div className="flex-1 flex flex-col gap-4">
                            <Body className="text-white">Precio *</Body>
                            <input type="text" name="price" value={formData.price} onChange={handleInputChange} placeholder="Ej: 15000" className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white placeholder-[#9A9A9A] text-body outline-none focus:border-[#00FF95] transition-colors min-h-[44px]" />
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <Body className="text-white">Modelo *</Body>
                            <input type="text" name="model" value={formData.model} onChange={handleInputChange} placeholder="Ej: NVIDIA Geforce" className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white placeholder-[#9A9A9A] text-body outline-none focus:border-[#00FF95] transition-colors min-h-[44px]" />
                        </div>
                    </div>

                    {/* Third Row - Inventory */}
                    <div className="flex flex-col gap-4">
                        <Body className="text-white">Inventario *</Body>
                        <input type="text" name="inventory" value={formData.inventory} onChange={handleInputChange} placeholder="Ej: 276" className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white placeholder-[#9A9A9A] text-body outline-none focus:border-[#00FF95] transition-colors min-h-[44px] max-w-[455px]" />
                    </div>

                    {/* Fourth Row - Description */}
                    <div className="flex flex-col gap-4">
                        <Body className="text-white">Descripción *</Body>
                        <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Ej: Tarjeta gráfica ideal para gaming y productividad." rows={3} className="bg-[#2F2F2F] border border-[#555] rounded-lg px-4 py-3 text-white placeholder-[#9A9A9A] text-body outline-none focus:border-[#00FF95] transition-colors resize-none h-[88px]" />
                    </div>

                    {/* Fifth Row - Image Upload */}
                    <div className="flex flex-col gap-4">
                        <Body className="text-white">Imagen del producto *</Body>
                        <div className={`border-2 border-dashed border-[#555] rounded-lg bg-[#2F2F2F] p-6 flex flex-col items-center justify-center gap-4 min-h-[176px] transition-colors cursor-pointer ${dragActive ? 'border-[#00FF95] bg-[#1A1A1A]' : ''}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onClick={() => document.getElementById('file-input')?.click()}>
                            <input id="file-input" type="file" accept=".jpg,.jpeg,.png,.webp" onChange={handleFileSelect} className="hidden" />
                            <FileIcon />
                            <div className="flex flex-col items-center gap-2">
                                <Body className="text-white font-bold text-center">Arrastra una imagen<br />o haz clic</Body>
                                <Caption className="text-white text-center">Sube al menos 1 foto del producto. Se admiten 6 fotos en total.</Caption>
                                <Caption className="text-white text-center">JPEG, JPG, PNG O WEBP</Caption>
                            </div>
                            {formData.image && (<div className="mt-2"><Caption className="text-[#00FF95]">Archivo seleccionado: {formData.image.name}</Caption></div>)}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6 mt-8 justify-end">
                    <button className="bg-[#FF3737] text-white px-4 py-2.5 rounded-full font-bold text-body hover:bg-[#e52e2e] transition-colors cursor-pointer">Cancelar</button>
                    <button className="bg-[#00FF95] text-[#1A1A1A] px-4 py-2.5 rounded-full font-bold text-body hover:bg-[#00e585] transition-colors cursor-pointer">Agregar producto</button>
                </div>
            </div>
        </main>
    );
}

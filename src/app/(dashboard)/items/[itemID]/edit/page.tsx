"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { Display, Body } from "@/components/atoms/Typography";

interface EditProductProps {
  params: Promise<{
    itemID: string;
  }>;
}

export default function EditProduct({ params }: EditProductProps) {
  // TODO: Use params to fetch the specific item data
  use(params); // Use params directly without storing in variable
  // Pre-populated form data for editing
  const [formData, setFormData] = useState({
    name: "Quantum Xtreme Gaming PC",
    category: "Workstation",
    price: "24000",
    model: "Xtreme Gaming",
    inventory: "17",
    description:
      "Estación de trabajo ideal para ciencia de datos y sesiones intensivas de gaming.",
  });

  const [existingImages] = useState([
    "https://api.builder.io/api/v1/image/assets/TEMP/3832c2d2a91d829662c7c8017e55f6a949c578ed?width=450",
    "https://api.builder.io/api/v1/image/assets/TEMP/214df0d8c5261abf43506d32f44537a5b11b5974?width=450",
    "https://api.builder.io/api/v1/image/assets/TEMP/7dbbcb2ea08b03387d53305fa9fc4968de20a0fa?width=450",
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ChevronDownIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10L12 15L7 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 flex-1 bg-[#1A1A1A] text-white font-body">
      <DashboardContentLayout>
        {/* Page Title */}
        <Display>Editar producto</Display>
        {/* Form Container */}
        <div className="flex-1 bg-gray rounded-lg p-8 flex flex-col">
          <div className="flex flex-col gap-6 flex-1">
            {/* First Row - Name and Category */}
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <Body className="text-text">Nombre del producto *</Body>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="min-h-[44px]"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Body className="text-text">Categoria</Body>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="bg-gray border border-border rounded-lg px-4 py-3 text-text text-body outline-none focus:border-primary transition-colors min-h-[44px] w-full appearance-none cursor-pointer"
                  >
                    <option value="Workstation">Workstation</option>
                    <option value="Componentes">Componentes</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Second Row - Price and Model */}
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <Body className="text-text">Precio *</Body>
                <Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="min-h-[44px]"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Body className="text-text">Modelo *</Body>
                <Input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className="min-h-[44px]"
                />
              </div>
            </div>
            {/* Third Row - Inventory */}
            <div className="flex flex-col gap-4">
              <Body className="text-text">Inventario *</Body>
              <Input
                type="text"
                name="inventory"
                value={formData.inventory}
                onChange={handleInputChange}
                className="min-h-[44px] max-w-[455px]"
              />
            </div>
            {/* Fourth Row - Description */}
            <div className="flex flex-col gap-4">
              <Body className="text-text">Descripción *</Body>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="bg-gray border border-border rounded-lg px-4 py-3 text-text text-body outline-none focus:border-primary transition-colors resize-none h-[88px]"
              />
            </div>
            {/* Fifth Row - Product Images */}
            <div className="flex flex-col gap-4">
              <Body className="text-text">Imagen del producto *</Body>
              <div className="border border-dashed border-border rounded-lg bg-gray p-6 flex items-center gap-0 min-h-[176px]">
                {existingImages.map((imageUrl, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={imageUrl}
                      alt={`Product image ${index + 1}`}
                      className="w-[225px] h-[225px] object-cover aspect-square"
                      width={225}
                      height={225}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-6 mt-8 justify-end">
            <Button variant="danger">Cancelar</Button>
            <Button variant="warning">Editar producto</Button>
          </div>
        </div>
      </DashboardContentLayout>
    </div>
  );
}

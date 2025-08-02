"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Display, Body } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import { useRouter } from "next/navigation";

interface EmployeeFormData {
    name: string;
    role: string;
    fatherLastName: string;
    motherLastName: string;
    phone: string;
    email: string;
}

const roleOptions = [
    "Cliente",
    "Empleado",
    "Administrador",
];

export default function addEmployee() {
    const router = useRouter();
    const [formData, setFormData] = useState<EmployeeFormData>({
        name: "",
        role: "",
        fatherLastName: "",
        motherLastName: "",
        phone: "",
        email: ""
    });
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

    const handleInputChange = (field: keyof EmployeeFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleRoleSelect = (role: string) => {
        handleInputChange('role', role);
        setIsRoleDropdownOpen(false);
    };

    const handleCancel = () => {
        router.push('/employers');
    };

    const handleSubmit = () => {
        // Validate required fields
        if (!formData.name || !formData.role || !formData.fatherLastName || 
            !formData.motherLastName || !formData.phone || !formData.email) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }

        // Add employee logic here
        console.log('Employee data:', formData);
        
        // Redirect back to employers list
        router.push('/employers');
    };

    return (
        <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 text-text font-body">
            <DashboardContentLayout>
                <div className="pb-8">
                    <Display>Agregar empleado</Display>
                </div>

                <div className="bg-gray rounded-lg p-8 min-h-[440px] flex flex-col justify-between">
                    <div className="flex flex-col gap-6">
                        {/* First Row: Name and Role */}
                        <div className="flex gap-6 flex-wrap">
                            <div className="flex flex-col flex-1 min-w-[240px]">
                                <Body className="text-text mb-4">Nombre *</Body>
                                <Input
                                    type="text"
                                    placeholder="Ej: Juán"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="bg-gray border-border text-placeholder"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-[240px] relative">
                                <Body className="text-text mb-4">Rol *</Body>
                                <div className="relative">
                                    <div 
                                        className="flex items-center justify-between bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] cursor-pointer"
                                        onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                                    >
                                        <Body className={formData.role ? "text-text" : "text-placeholder"}>
                                            {formData.role || "Ej: Empleado"}
                                        </Body>
                                        <ChevronDownIcon className="w-6 h-6 text-placeholder" />
                                    </div>
                                    {isRoleDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 bg-gray border border-border rounded-lg mt-1 z-10 shadow-lg">
                                            {roleOptions.map((role) => (
                                                <div
                                                    key={role}
                                                    className="px-4 py-3 hover:bg-dark cursor-pointer border-b border-border last:border-b-0"
                                                    onClick={() => handleRoleSelect(role)}
                                                >
                                                    <Body className="text-text">{role}</Body>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Second Row: Last Names */}
                        <div className="flex gap-6 flex-wrap">
                            <div className="flex flex-col flex-1 min-w-[240px]">
                                <Body className="text-text mb-4">Apellido paterno *</Body>
                                <Input
                                    type="text"
                                    placeholder="Ej: Martínez"
                                    value={formData.fatherLastName}
                                    onChange={(e) => handleInputChange('fatherLastName', e.target.value)}
                                    className="bg-gray border-border text-placeholder"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-[240px]">
                                <Body className="text-text mb-4">Apellido materno *</Body>
                                <Input
                                    type="text"
                                    placeholder="Ej: Mendoza"
                                    value={formData.motherLastName}
                                    onChange={(e) => handleInputChange('motherLastName', e.target.value)}
                                    className="bg-gray border-border text-placeholder"
                                />
                            </div>
                        </div>

                        {/* Third Row: Phone and Email */}
                        <div className="flex gap-6 flex-wrap">
                            <div className="flex flex-col flex-1 min-w-[240px]">
                                <Body className="text-text mb-4">Número de teléfono *</Body>
                                <Input
                                    type="tel"
                                    placeholder="Ej: 2761234567"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="bg-gray border-border text-placeholder"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-[240px]">
                                <Body className="text-text mb-4">Correo electrónico *</Body>
                                <Input
                                    type="email"
                                    placeholder="Ej: juan@ejemplo.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="bg-gray border-border text-placeholder"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-6 mt-12">
                        <Button
                            variant="danger"
                            onClick={handleCancel}
                            className="px-4 py-3 rounded-full font-bold text-body">
                            Cancelar
                        </Button>
                        <Button
                            variant="success"
                            onClick={handleSubmit}
                            className="px-4 py-3 rounded-full font-bold text-body">
                            Agregar empleado
                        </Button>
                    </div>
                </div>
            </DashboardContentLayout>
        </div>
    );
}

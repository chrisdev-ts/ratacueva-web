'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Body } from "@/components/atoms/Typography";
import {
    HomeIcon,
    ShoppingCartIcon,
    UsersIcon,
    TruckIcon,
    CubeIcon,
    Cog6ToothIcon,
    ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";

export default function Sidebar() {
    const pathname = usePathname();
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setRole(user.role);
        }
    }, []);

    const navigationItems = [
        { name: "Inicio", icon: HomeIcon, href: "/overview" },
        { name: "Productos", icon: CubeIcon, href: "/items" },
        ...(role === "admin" ? [{ name: "Empleados", icon: UsersIcon, href: "/employees" }] : []),
        { name: "Envíos", icon: TruckIcon, href: "/shipments" },
        { name: "Ventas", icon: ShoppingCartIcon, href: "/sales" },
    ];

    const bottomNavigationItems = [
        { name: "Configuración", icon: Cog6ToothIcon, href: "/settings" },
        { name: "Cerrar sesión", icon: ArrowLeftStartOnRectangleIcon, action: "logout" },
    ];


    return (
        <div className="h-screen bg-gray flex flex-col">
            <div className="flex px-8 py-8 flex-col items-center w-full">
                {/* Logo */}
                <div className="flex flex-col items-center gap-4 w-full mb-8">
                    <div className="flex items-center justify-center w-full">
                        <Image
                            src="/images/logotipo-base.svg"
                            alt="RataCueva Logo"
                            width={220}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="w-[234px] h-px bg-white" />
                </div>

                {/* Main Navigation */}
                <nav className="flex flex-col items-start w-full mb-8 gap-y-1">
                    {navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex px-4 py-4 items-center gap-4 w-full rounded-lg transition-all duration-200 
                ${isActive ? "bg-dark" : "hover:bg-dark"}`}
                            >
                                <Icon className="w-6 h-6 text-white" />
                                <Body as="span" className="font-bold">{item.name}</Body>
                            </Link>
                        );
                    })}
                </nav>

                <div className="w-[234px] h-px bg-white mb-8" />

                {/* Bottom Navigation */}
                <nav className="flex flex-col items-start w-full">{bottomNavigationItems.map((item) => {
                    const Icon = item.icon;

                    if (item.action === "logout") {
                        return (
                            <button
                                key={item.name}
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("user");
                                    window.location.href = "/login"; // o router.push("/login");
                                }}
                                className="flex px-4 py-4 items-center gap-4 w-full rounded-lg transition-all duration-200 hover:bg-dark"
                            >
                                <Icon className="w-6 h-6 text-white" />
                                <Body as="span" className="font-bold">{item.name}</Body>
                            </button>
                        );
                    }

                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href!}
                            className={`flex px-4 py-4 items-center gap-4 w-full rounded-lg transition-all duration-200
                            ${isActive ? "bg-dark" : "hover:bg-dark"}`}>
                            <Icon className="w-6 h-6 text-white" />
                            <Body as="span" className="font-bold">{item.name}</Body>
                        </Link>
                    );
                })}
                </nav>
            </div>
        </div>
    );
}

"use client";

import React from "react";
import Button from "@/components/atoms/Button";
import { Body, Display } from "@/components/atoms/Typography";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import BaseTable from "@/components/features/dashboard/atoms/BaseTable";
import StatusTag from "@/components/features/dashboard/atoms/StatusTag";
import {
    PlusCircleIcon,
    TruckIcon,
    DocumentChartBarIcon,
    PercentBadgeIcon,
} from "@heroicons/react/24/solid";
import { ColumnDef } from "@tanstack/react-table";

const metricsData = [
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true,
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true,
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true,
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true,
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true,
    },
];

// --- RecentOrders ---
interface Order {
    id: string;
    customer: string;
    products: string;
    total: string;
    status: "completed" | "pending" | "processing" | "cancelled";
    date: string;
}

const ordersData: Order[] = [
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "completed",
        date: "2025-06-20",
    },
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "pending",
        date: "2025-06-20",
    },
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "processing",
        date: "2025-06-20",
    },
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "cancelled",
        date: "2025-06-20",
    },
];

// --- TopSellingProducts ---
interface Product {
    name: string;
    description: string;
    unitsSold: string;
}

const topProducts: Product[] = [
    {
        name: "Gaming PC X1",
        description: "High-end pre-built gaming desktop.",
        unitsSold: "150 units sold",
    },
    {
        name: "Cyberpunk 2077",
        description: "Popular open-world RPG.",
        unitsSold: "210 keys sold",
    },
    {
        name: 'Gaming Monitor (27" 144Hz)',
        description: "High refresh rate display.",
        unitsSold: "85 units sold",
    },
];

// --- QuickActions ---
interface QuickAction {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

const quickActions: QuickAction[] = [
    {
        title: "Añadir nuevo producto",
        icon: <PlusCircleIcon className="w-6 h-6 text-white" />,
    },
    {
        title: "Procesar envíos",
        icon: <TruckIcon className="w-6 h-6 text-white" />,
    },
    {
        title: "Generar reporte de ventas",
        icon: <DocumentChartBarIcon className="w-6 h-6 text-white" />,
    },
    {
        title: "Crear nueva promoción",
        icon: <PercentBadgeIcon className="w-6 h-6 text-white" />,
    },
];

export default function Overview() {
    return (
        <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1  text-text font-body">
            <DashboardContentLayout>
                <Display>Vista general</Display>
                {/* Sales Metrics Grid */}
                <div className="flex flex-col gap-8 self-stretch">
                    <div className="flex items-start gap-8 self-stretch">
                        {metricsData.slice(0, 3).map((metric, index) => (
                            <div key={index} className="flex p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-gray">
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83398 12.5H7.50065C7.50065 13.4 8.64232 14.1667 10.0007 14.1667C11.359 14.1667 12.5007 13.4 12.5007 12.5C12.5007 11.5833 11.634 11.25 9.80065 10.8083C8.03398 10.3667 5.83398 9.81667 5.83398 7.5C5.83398 6.00833 7.05898 4.74167 8.75065 4.31667V2.5H11.2507V4.31667C12.9423 4.74167 14.1673 6.00833 14.1673 7.5H12.5007C12.5007 6.6 11.359 5.83333 10.0007 5.83333C8.64232 5.83333 7.50065 6.6 7.50065 7.5C7.50065 8.41667 8.36732 8.75 10.2007 9.19167C11.9673 9.63333 14.1673 10.1833 14.1673 12.5C14.1673 13.9917 12.9423 15.2583 11.2507 15.6833V17.5H8.75065V15.6833C7.05898 15.2583 5.83398 13.9917 5.83398 12.5Z" fill="white" />
                                    </svg>
                                    <Body as="span">{metric.title}</Body>
                                </div>
                                <Display as="div" className="text-display">{metric.value}</Display>
                                <Body as="span" className={metric.isPositive ? "text-success" : "text-danger"}>{metric.change}</Body>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-start gap-8 self-stretch">
                        {metricsData.slice(3, 5).map((metric, index) => (
                            <div key={index + 3} className="flex p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-gray">
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83398 12.5H7.50065C7.50065 13.4 8.64232 14.1667 10.0007 14.1667C11.359 14.1667 12.5007 13.4 12.5007 12.5C12.5007 11.5833 11.634 11.25 9.80065 10.8083C8.03398 10.3667 5.83398 9.81667 5.83398 7.5C5.83398 6.00833 7.05898 4.74167 8.75065 4.31667V2.5H11.2507V4.31667C12.9423 4.74167 14.1673 6.00833 14.1673 7.5H12.5007C12.5007 6.6 11.359 5.83333 10.0007 5.83333C8.64232 5.83333 7.50065 6.6 7.50065 7.5C7.50065 8.41667 8.36732 8.75 10.2007 9.19167C11.9673 9.63333 14.1673 10.1833 14.1673 12.5C14.1673 13.9917 12.9423 15.2583 11.2507 15.6833V17.5H8.75065V15.6833C7.05898 15.2583 5.83398 13.9917 5.83398 12.5Z" fill="white" />
                                    </svg>
                                    <Body as="span">{metric.title}</Body>
                                </div>
                                <Display as="div" className="text-display">{metric.value}</Display>
                                <Body as="span" className={metric.isPositive ? "text-success" : "text-danger"}>{metric.change}</Body>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Pedidos recientes */}
                <div className="self-stretch">
                    <div className="flex justify-between items-center pt-8 pb-4">
                        <Display as="h2">Pedidos recientes</Display>
                        <Button variant="outlineSecondary" className="min-h-11 rounded-[99px] gap-3">Ver todo</Button>
                    </div>
                    {/* Tabla refactorizada con BaseTable */}
                    {(() => {
                        const columns: ColumnDef<typeof ordersData[0]>[] = [
                            {
                                accessorKey: "id",
                                header: "ORDER ID",
                                cell: info => <div className="text-text text-base font-normal leading-normal">{String(info.getValue())}</div>
                            },
                            {
                                accessorKey: "customer",
                                header: "CUSTOMER",
                                cell: info => <div className="text-text text-base font-normal leading-normal">{String(info.getValue())}</div>
                            },
                            {
                                accessorKey: "products",
                                header: "PRODUCTS",
                                cell: info => <div className="text-text text-base font-normal leading-normal">{String(info.getValue())}</div>
                            },
                            {
                                accessorKey: "total",
                                header: "TOTAL",
                                cell: info => <div className="text-text text-base font-normal leading-normal">{String(info.getValue())}</div>
                            },
                            {
                                accessorKey: "status",
                                header: "STATUS",
                                cell: info => (
                                    <StatusTag status={info.getValue() as "completed" | "pending" | "processing" | "cancelled"} />
                                )
                            },
                            {
                                accessorKey: "date",
                                header: "DATE",
                                cell: info => <div className="text-text text-base font-normal leading-normal">{String(info.getValue())}</div>
                            }
                        ];
                        return <BaseTable data={ordersData} columns={columns} />;
                    })()}
                </div>
                {/* Chart Section */}
                <div className="self-stretch">
                    <div className="flex justify-between items-center pt-8 pb-4">
                        <Display as="h2">Rendimiento de ventas a lo largo del tiempo</Display>
                    </div>
                    <div className="flex h-[331px] p-6 flex-col items-start gap-6 self-stretch rounded-lg bg-gray"></div>
                </div>
                {/* Bottom Section */}
                <div className="flex items-start gap-8 pt-8 pb-4 self-stretch">
                    {/* Top Selling Products */}
                    <div className="flex h-full p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-gray">
                        <Display as="h3" className="self-stretch">Productos más vendidos</Display>
                        <div className="flex flex-col items-start self-stretch">
                            {topProducts.map((product, index) => (
                                <div key={index} className="flex p-4 items-start gap-4 self-stretch border-t border-dark">
                                    <div className="flex flex-col items-start gap-2">
                                        <h4 className="text-text  text-base font-bold leading-normal">{product.name}</h4>
                                        <p className="text-text  text-base font-normal leading-normal">{product.description}</p>
                                    </div>
                                    <div className="flex-1 text-text text-right  text-base font-bold leading-normal">{product.unitsSold}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Quick Actions */}
                    <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded-lg bg-gray">
                        <Display as="h3" className="self-stretch">Acciones rápidas</Display>
                        <div className="grid grid-cols-2 gap-6 flex-1 self-stretch">
                            {quickActions.map((action, index) => (
                                <Button key={index} variant="quickAction">
                                    {action.icon}
                                    <span className="flex-1  text-base font-bold leading-normal">{action.title}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </DashboardContentLayout>
        </div>
    );
}

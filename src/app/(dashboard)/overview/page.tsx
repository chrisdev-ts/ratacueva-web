import React from "react";
import { Body, Display } from "@/components/atoms/Typography";

const metricsData = [
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true
    },
    {
        title: "Total de ventas",
        value: "$1,234,567",
        change: "↑ 12.5% vs last month",
        isPositive: true
    }
];

// --- RecentOrders ---
interface Order {
    id: string;
    customer: string;
    products: string;
    total: string;
    status: 'completed' | 'pending' | 'processing' | 'cancelled';
    date: string;
}


const ordersData: Order[] = [
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "completed",
        date: "2025-06-20"
    },
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "pending",
        date: "2025-06-20"
    },
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "processing",
        date: "2025-06-20"
    },
    {
        id: "#GM8765",
        customer: "Alice Smith",
        products: "Gaming PC X1, Keyboard",
        total: "$1,899.00",
        status: "cancelled",
        date: "2025-06-20"
    }
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
        unitsSold: "150 units sold"
    },
    {
        name: "Cyberpunk 2077",
        description: "Popular open-world RPG.",
        unitsSold: "210 keys sold"
    },
    {
        name: 'Gaming Monitor (27" 144Hz)',
        description: "High refresh rate display.",
        unitsSold: "85 units sold"
    }
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
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
            </svg>
        )
    },
    {
        title: "Procesar envíos",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
        )
    },
    {
        title: "Generar reporte de ventas",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
            </svg>
        )
    },
    {
        title: "Crear nueva promoción",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                <path fillRule="evenodd" d="M11.99 2.243a4.49 4.49 0 0 0-3.398 1.55 4.49 4.49 0 0 0-3.497 1.306 4.491 4.491 0 0 0-1.307 3.498 4.491 4.491 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 0 0 1.307 3.498 4.49 4.49 0 0 0 3.498 1.307 4.49 4.49 0 0 0 3.397 1.549 4.49 4.49 0 0 0 3.397-1.549 4.49 4.49 0 0 0 3.497-1.307 4.491 4.491 0 0 0 1.306-3.497 4.491 4.491 0 0 0 1.55-3.398c0-1.357-.601-2.573-1.549-3.397a4.491 4.491 0 0 0-1.307-3.498 4.49 4.49 0 0 0-3.498-1.307 4.49 4.49 0 0 0-3.396-1.549Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
            </svg>
        )
    }
];

export default function Overview() {
    return (
        <div>
            <main className="flex px-7 py-8 flex-col items-start gap-8 flex-1 bg-dark text-text">
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
                                <Body as="span" className={metric.isPositive ? "text-success" : "text-danger"}>
                                    {metric.change}
                                </Body>
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
                                <Body as="span" className={metric.isPositive ? "text-success" : "text-danger"}>
                                    {metric.change}
                                </Body>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pedidos recientes */}
                <div className="self-stretch">
                    <div className="flex justify-between items-center self-stretch mb-8">
                        <Display as="h2">Pedidos recientes</Display>
                        <button className="flex h-11 min-h-11 px-4 py-2.5 justify-center items-center gap-3 rounded-[99px] border border-secondary bg-transparent text-secondary font-bold hover:bg-secondary/10 transition-all">
                            Ver todo
                        </button>
                    </div>

                    <div className="flex flex-col items-start self-stretch rounded-lg bg-gray">
                        {/* Table Header */}
                        <div className="flex px-6 py-5 items-start self-stretch border-b-2 border-dark">
                            <div className="flex-1 text-text font-inter text-base font-bold leading-normal">ORDER ID</div>
                            <div className="flex-1 text-text font-inter text-base font-bold leading-normal">CUSTOMER</div>
                            <div className="flex-1 text-text font-inter text-base font-bold leading-normal">PRODUCTS</div>
                            <div className="flex-1 text-text font-inter text-base font-bold leading-normal">TOTAL</div>
                            <div className="flex-1 text-text font-inter text-base font-bold leading-normal">STATUS</div>
                            <div className="flex-1 text-text font-inter text-base font-bold leading-normal">DATE</div>
                        </div>

                        {/* Table Rows */}
                        {ordersData.map((order, index) => (
                            <div key={index} className="flex px-6 py-4 items-start self-stretch border-b border-dark/50">
                                <div className="flex-1 text-text font-inter text-base font-normal leading-normal">{order.id}</div>
                                <div className="flex-1 text-text font-inter text-base font-normal leading-normal">{order.customer}</div>
                                <div className="flex-1 text-text font-inter text-base font-normal leading-normal">{order.products}</div>
                                <div className="flex-1 text-text font-inter text-base font-normal leading-normal">{order.total}</div>
                                <div className="flex-1">
                                    <div className={`flex px-3 py-2 justify-center items-center rounded-[100px] w-fit ${order.status === 'completed' ? 'bg-success' :
                                            order.status === 'pending' ? 'bg-warning' :
                                                order.status === 'processing' ? 'bg-accent' :
                                                    'bg-danger'
                                        }`}>
                                        <span className={`font-inter text-sm font-bold leading-normal ${order.status === 'completed' ? 'text-success-dark' :
                                                order.status === 'pending' ? 'text-warning-dark' :
                                                    order.status === 'processing' ? 'text-accent-dark' :
                                                        'text-danger-dark'
                                            }`}>
                                            {order.status === 'completed' ? 'Completed' :
                                                order.status === 'pending' ? 'Pending' :
                                                    order.status === 'processing' ? 'Processing' :
                                                        'Cancelled'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 text-text font-inter text-base font-normal leading-normal">{order.date}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chart Section */}
                <div className="self-stretch">
                    <Display as="h2" className="mb-8">Rendimiento de ventas a lo largo del tiempo</Display>
                    <div className="flex h-[331px] p-6 flex-col items-start gap-6 self-stretch rounded-lg bg-gray"></div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-start gap-8 self-stretch">
                    {/* Top Selling Products */}
                    <div className="flex h-full p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-gray">
                        <Display as="h3" className="self-stretch">Productos más vendidos</Display>
                        <div className="flex flex-col items-start self-stretch">
                            {topProducts.map((product, index) => (
                                <div key={index} className="flex p-4 items-start gap-4 self-stretch border-t border-dark">
                                    <div className="flex flex-col items-start gap-2">
                                        <h4 className="text-text font-inter text-base font-bold leading-normal">{product.name}</h4>
                                        <p className="text-text font-inter text-base font-normal leading-normal">{product.description}</p>
                                    </div>
                                    <div className="flex-1 text-text text-right font-inter text-base font-bold leading-normal">{product.unitsSold}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded-lg bg-gray">
                        <Display as="h3" className="self-stretch">Acciones rápidas</Display>
                        <div className="grid grid-cols-2 gap-6 flex-1 self-stretch">
                            {quickActions.map((action, index) => (
                                <button key={index} className="flex p-6 justify-center items-center gap-4 flex-1 self-stretch rounded-2xl bg-dark hover:bg-white/10 transition-all text-text">
                                    {action.icon}
                                    <span className="flex-1 font-inter text-base font-bold leading-normal">{action.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

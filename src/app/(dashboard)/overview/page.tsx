import React from "react";
import { Body, Display } from "@/components/atoms/Typography";

// --- SalesMetrics ---
interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
}

function MetricCard({ title, value, change, isPositive }: MetricCardProps) {
    return (
        <div className="flex p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-[var(--color-gray)]">
            <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.83398 12.5H7.50065C7.50065 13.4 8.64232 14.1667 10.0007 14.1667C11.359 14.1667 12.5007 13.4 12.5007 12.5C12.5007 11.5833 11.634 11.25 9.80065 10.8083C8.03398 10.3667 5.83398 9.81667 5.83398 7.5C5.83398 6.00833 7.05898 4.74167 8.75065 4.31667V2.5H11.2507V4.31667C12.9423 4.74167 14.1673 6.00833 14.1673 7.5H12.5007C12.5007 6.6 11.359 5.83333 10.0007 5.83333C8.64232 5.83333 7.50065 6.6 7.50065 7.5C7.50065 8.41667 8.36732 8.75 10.2007 9.19167C11.9673 9.63333 14.1673 10.1833 14.1673 12.5C14.1673 13.9917 12.9423 15.2583 11.2507 15.6833V17.5H8.75065V15.6833C7.05898 15.2583 5.83398 13.9917 5.83398 12.5Z" fill="white" />
                </svg>
                <Body>{title}</Body>
            </div>
            <Display as="div" className="!text-[32px]">{value}</Display>
            <Body className={isPositive ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}>
                {change}
            </Body>
        </div>
    );
}

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

function StatusBadge({ status }: { status: Order['status'] }) {
    const statusConfig = {
        completed: {
            label: 'Completed',
            className: 'status-completed'
        },
        pending: {
            label: 'Pending',
            className: 'status-pending'
        },
        processing: {
            label: 'Processing',
            className: 'status-processing'
        },
        cancelled: {
            label: 'Cancelled',
            className: 'status-cancelled'
        }
    };

    const config = statusConfig[status];

    return (
        <div className={`status-badge ${config.className}`}>
            <span className="status-text">{config.label}</span>
        </div>
    );
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

function ProductItem({ product }: { product: Product }) {
    return (
        <div className="product-item">
            <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-description">{product.description}</p>
            </div>
            <div className="product-sales">{product.unitsSold}</div>
        </div>
    );
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

function ActionCard({ action }: { action: QuickAction }) {
    return (
        <button
            className="action-card"
            onClick={action.onClick}
        >
            {action.icon}
            <span className="action-title">{action.title}</span>
        </button>
    );
}

const quickActions: QuickAction[] = [
    {
        title: "Añadir nuevo producto",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4.125C6.82219 4.125 2.625 8.32219 2.625 13.5C2.625 18.6778 6.82219 22.875 12 22.875C17.1778 22.875 21.375 18.6778 21.375 13.5C21.375 8.32219 17.1778 4.125 12 4.125ZM16.6875 14.4375H12.9375V18.1875H11.0625V14.4375H7.3125V12.5625H11.0625V8.8125H12.9375V12.5625H16.6875V14.4375Z" fill="white" />
            </svg>
        )
    },
    {
        title: "Procesar envíos",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 14L2.25 12.5H7.5L6.9 11H2L1.25 9.5H9.05L8.45 8H1.11L0.25 6.5H4C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H18V8.5H21L24 12.5V17.5H22C22 18.2956 21.6839 19.0587 21.1213 19.6213C20.5587 20.1839 19.7956 20.5 19 20.5C18.2044 20.5 17.4413 20.1839 16.8787 19.6213C16.3161 19.0587 16 18.2956 16 17.5H12C12 18.2956 11.6839 19.0587 11.1213 19.6213C10.5587 20.1839 9.79565 20.5 9 20.5C8.20435 20.5 7.44129 20.1839 6.87868 19.6213C6.31607 19.0587 6 18.2956 6 17.5H4V14H3ZM19 19C19.3978 19 19.7794 18.842 20.0607 18.5607C20.342 18.2794 20.5 17.8978 20.5 17.5C20.5 17.1022 20.342 16.7206 20.0607 16.4393C19.7794 16.158 19.3978 16 19 16C18.6022 16 18.2206 16.158 17.9393 16.4393C17.658 16.7206 17.5 17.1022 17.5 17.5C17.5 17.8978 17.658 18.2794 17.9393 18.5607C18.2206 18.842 18.6022 19 19 19ZM20.5 10H18V12.5H22.46L20.5 10ZM9 19C9.39782 19 9.77936 18.842 10.0607 18.5607C10.342 18.2794 10.5 17.8978 10.5 17.5C10.5 17.1022 10.342 16.7206 10.0607 16.4393C9.77936 16.158 9.39782 16 9 16C8.60218 16 8.22064 16.158 7.93934 16.4393C7.65804 16.7206 7.5 17.1022 7.5 17.5C7.5 17.8978 7.65804 18.2794 7.93934 18.5607C8.22064 18.842 8.60218 19 9 19Z" fill="white" />
            </svg>
        )
    },
    {
        title: "Generar reporte de ventas",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 2.5V22.5C5.9 22 2 17.7 2 12.5C2 7.3 5.9 3 11 2.5ZM13 2.5V11.5H22C21.5 6.7 17.8 3 13 2.5ZM13 13.5V22.5C17.7 22 21.5 18.3 22 13.5H13Z" fill="white" />
            </svg>
        )
    },
    {
        title: "Crear nueva promoción",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.116 3.60799L12.227 1.87549L9.33805 3.60799L5.98255 3.90499L4.66255 7.00399L2.12305 9.21649L2.87755 12.5L2.12305 15.7835L4.66255 17.996L5.98255 21.095L9.33805 21.392L12.227 23.1245L15.116 21.392L18.4715 21.095L19.7915 17.996L22.3325 15.7835L21.575 12.5L22.331 9.21649L19.79 7.00399L18.47 3.90499L15.116 3.60799ZM8.75005 10.25C8.75005 10.0511 8.82906 9.86031 8.96972 9.71966C9.11037 9.57901 9.30114 9.49999 9.50005 9.49999C9.69896 9.49999 9.88972 9.57901 10.0304 9.71966C10.171 9.86031 10.25 10.0511 10.25 10.25C10.25 10.4489 10.171 10.6397 10.0304 10.7803C9.88972 10.921 9.69896 11 9.50005 11C9.30114 11 9.11037 10.921 8.96972 10.7803C8.82906 10.6397 8.75005 10.4489 8.75005 10.25ZM9.50005 7.99999C8.90331 7.99999 8.33101 8.23704 7.90906 8.659C7.4871 9.08096 7.25005 9.65325 7.25005 10.25C7.25005 10.8467 7.4871 11.419 7.90906 11.841C8.33101 12.2629 8.90331 12.5 9.50005 12.5C10.0968 12.5 10.6691 12.2629 11.091 11.841C11.513 11.419 11.75 10.8467 11.75 10.25C11.75 9.65325 11.513 9.08096 11.091 8.659C10.6691 8.23704 10.0968 7.99999 9.50005 7.99999ZM9.28105 16.781L16.781 9.28099L15.719 8.21899L8.21905 15.719L9.28105 16.781ZM14.75 15.5C14.75 15.3011 14.8291 15.1103 14.9697 14.9697C15.1104 14.829 15.3011 14.75 15.5 14.75C15.699 14.75 15.8897 14.829 16.0304 14.9697C16.171 15.1103 16.25 15.3011 16.25 15.5C16.25 15.6989 16.171 15.8897 16.0304 16.0303C15.8897 16.171 15.699 16.25 15.5 16.25C15.3011 16.25 15.1104 16.171 14.9697 16.0303C14.8291 15.8897 14.75 15.6989 14.75 15.5ZM15.5 13.25C14.9033 13.25 14.331 13.487 13.9091 13.909C13.4871 14.331 13.25 14.9033 13.25 15.5C13.25 16.0967 13.4871 16.669 13.9091 17.091C14.331 17.5129 14.9033 17.75 15.5 17.75C16.0968 17.75 16.6691 17.5129 17.091 17.091C17.513 16.669 17.75 16.0967 17.75 15.5C17.75 14.9033 17.513 14.331 17.091 13.909C16.6691 13.487 16.0968 13.25 15.5 13.25Z" fill="white" />
            </svg>
        )
    }
];

export default function Overview() {
    return (
        <div>
            <main className="flex px-20 py-8 flex-col items-start gap-8 flex-1">
                <Display className="mb-8">Vista general</Display>

                {/* Sales Metrics Grid */}
                <div className="flex flex-col gap-8 self-stretch">
                    <div className="flex items-start gap-8 self-stretch">
                        {metricsData.slice(0, 3).map((metric, index) => (
                            <div key={index} className="flex p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-[var(--color-gray)]">
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83398 12.5H7.50065C7.50065 13.4 8.64232 14.1667 10.0007 14.1667C11.359 14.1667 12.5007 13.4 12.5007 12.5C12.5007 11.5833 11.634 11.25 9.80065 10.8083C8.03398 10.3667 5.83398 9.81667 5.83398 7.5C5.83398 6.00833 7.05898 4.74167 8.75065 4.31667V2.5H11.2507V4.31667C12.9423 4.74167 14.1673 6.00833 14.1673 7.5H12.5007C12.5007 6.6 11.359 5.83333 10.0007 5.83333C8.64232 5.83333 7.50065 6.6 7.50065 7.5C7.50065 8.41667 8.36732 8.75 10.2007 9.19167C11.9673 9.63333 14.1673 10.1833 14.1673 12.5C14.1673 13.9917 12.9423 15.2583 11.2507 15.6833V17.5H8.75065V15.6833C7.05898 15.2583 5.83398 13.9917 5.83398 12.5Z" fill="white"/>
                                    </svg>
                                    <Body as="span">{metric.title}</Body>
                                </div>
                                <Display as="div" className="!text-[32px]">{metric.value}</Display>
                                <Body as="span" className={metric.isPositive ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}>
                                    {metric.change}
                                </Body>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-start gap-8 self-stretch">
                        {metricsData.slice(3, 5).map((metric, index) => (
                            <div key={index + 3} className="flex p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-[var(--color-gray)]">
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83398 12.5H7.50065C7.50065 13.4 8.64232 14.1667 10.0007 14.1667C11.359 14.1667 12.5007 13.4 12.5007 12.5C12.5007 11.5833 11.634 11.25 9.80065 10.8083C8.03398 10.3667 5.83398 9.81667 5.83398 7.5C5.83398 6.00833 7.05898 4.74167 8.75065 4.31667V2.5H11.2507V4.31667C12.9423 4.74167 14.1673 6.00833 14.1673 7.5H12.5007C12.5007 6.6 11.359 5.83333 10.0007 5.83333C8.64232 5.83333 7.50065 6.6 7.50065 7.5C7.50065 8.41667 8.36732 8.75 10.2007 9.19167C11.9673 9.63333 14.1673 10.1833 14.1673 12.5C14.1673 13.9917 12.9423 15.2583 11.2507 15.6833V17.5H8.75065V15.6833C7.05898 15.2583 5.83398 13.9917 5.83398 12.5Z" fill="white"/>
                                    </svg>
                                    <Body as="span">{metric.title}</Body>
                                </div>
                                <Display as="div" className="!text-[32px]">{metric.value}</Display>
                                <Body as="span" className={metric.isPositive ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}>
                                    {metric.change}
                                </Body>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pedidos recientes */}
                <div className="self-stretch">
                    <div className="flex justify-between items-center self-stretch mb-8">
                        <Display as="h2" className="!text-[var(--color-text)] !text-[var(--text-heading)]">Pedidos recientes</Display>
                        <button className="flex h-11 min-h-11 px-4 py-2.5 justify-center items-center gap-3 rounded-[99px] border border-[var(--color-secondary)] bg-transparent text-[var(--color-secondary)] font-bold hover:bg-[var(--color-secondary)]/10 transition-all">
                            Ver todo
                        </button>
                    </div>

                    <div className="flex flex-col items-start self-stretch rounded-lg bg-[#2F2F2F]">
                        {/* Table Header */}
                        <div className="flex px-6 py-5 items-start self-stretch border-b-2 border-[#1A1A1A]">
                            <div className="flex-1 text-white font-inter text-base font-bold leading-normal">ORDER ID</div>
                            <div className="flex-1 text-white font-inter text-base font-bold leading-normal">CUSTOMER</div>
                            <div className="flex-1 text-white font-inter text-base font-bold leading-normal">PRODUCTS</div>
                            <div className="flex-1 text-white font-inter text-base font-bold leading-normal">TOTAL</div>
                            <div className="flex-1 text-white font-inter text-base font-bold leading-normal">STATUS</div>
                            <div className="flex-1 text-white font-inter text-base font-bold leading-normal">DATE</div>
                        </div>

                        {/* Table Rows */}
                        {ordersData.map((order, index) => (
                            <div key={index} className="flex px-6 py-4 items-start self-stretch border-b border-[#1A1A1A]/50">
                                <div className="flex-1 text-white font-inter text-base font-normal leading-normal">{order.id}</div>
                                <div className="flex-1 text-white font-inter text-base font-normal leading-normal">{order.customer}</div>
                                <div className="flex-1 text-white font-inter text-base font-normal leading-normal">{order.products}</div>
                                <div className="flex-1 text-white font-inter text-base font-normal leading-normal">{order.total}</div>
                                <div className="flex-1">
                                    <div className={`flex px-3 py-2 justify-center items-center rounded-[100px] w-fit ${
                                        order.status === 'completed' ? 'bg-[#00FF95]' :
                                        order.status === 'pending' ? 'bg-[#FFC71D]' :
                                        order.status === 'processing' ? 'bg-[#B455FD]' :
                                        'bg-[#FF3737]'
                                    }`}>
                                        <span className={`font-inter text-sm font-bold leading-normal ${
                                            order.status === 'completed' ? 'text-[#0B472E]' :
                                            order.status === 'pending' ? 'text-[#614E15]' :
                                            order.status === 'processing' ? 'text-[#481D6A]' :
                                            'text-[#591516]'
                                        }`}>
                                            {order.status === 'completed' ? 'Completed' :
                                             order.status === 'pending' ? 'Pending' :
                                             order.status === 'processing' ? 'Processing' :
                                             'Cancelled'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 text-white font-inter text-base font-normal leading-normal">{order.date}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chart Section */}
                <div className="self-stretch">
                    <Display as="h2" className="mb-8 !text-[var(--color-text)] !text-[var(--text-heading)]">Rendimiento de ventas a lo largo del tiempo</Display>
                    <div className="flex h-[331px] p-6 flex-col items-start gap-6 self-stretch rounded-lg bg-[var(--color-gray)]"></div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-start gap-8 self-stretch">
                    {/* Top Selling Products */}
                    <div className="flex h-[331px] p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-[var(--color-gray)]">
                        <Display as="h3" className="self-stretch !text-[var(--color-text)] !text-[var(--text-heading)]">Productos más vendidos</Display>
                        <div className="flex flex-col items-start self-stretch">
                            {topProducts.map((product, index) => (
                                <div key={index} className="flex p-4 items-start gap-4 self-stretch border-t border-[#1A1A1A]">
                                    <div className="flex flex-col items-start gap-2">
                                        <h4 className="text-white font-inter text-base font-bold leading-normal">{product.name}</h4>
                                        <p className="text-white font-inter text-base font-normal leading-normal">{product.description}</p>
                                    </div>
                                    <div className="flex-1 text-white text-right font-inter text-base font-bold leading-normal">{product.unitsSold}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded-lg bg-[var(--color-gray)]">
                        <Display as="h3" className="self-stretch !text-[var(--color-text)] !text-[var(--text-heading)]">Acciones rápidas</Display>
                        <div className="grid grid-cols-2 gap-6 flex-1 self-stretch">
                            {quickActions.map((action, index) => (
                                <button key={index} className="flex p-6 justify-center items-center gap-4 flex-1 self-stretch rounded-2xl bg-[#1A1A1A] hover:bg-white/10 transition-all text-white">
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

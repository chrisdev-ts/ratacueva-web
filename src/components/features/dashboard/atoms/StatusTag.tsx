import React from "react";
import clsx from "clsx";

export type StatusType = "completed" | "pending" | "processing" | "cancelled";

interface StatusTagProps {
    status: StatusType;
    className?: string;
    children?: React.ReactNode;
}

const statusClasses: Record<StatusType, string> = {
    completed: "bg-success text-success-dark",
    pending: "bg-warning text-warning-dark",
    processing: "bg-accent text-accent-dark",
    cancelled: "bg-danger text-danger-dark"
};

// Función helper para determinar el status según el stock
export const getStockStatus = (stock: number): StatusType => {
    if (stock >= 50) return "completed";
    if (stock > 0) return "pending";
    return "cancelled";
};

export const mapOrderStatusToStatusType = (orderStatus: string): StatusType => {
    switch (orderStatus) {
        case "shipped": return "completed";
        case "pending": return "pending";
        case "processing": return "processing";
        case "cancelled": return "cancelled";
        default: return "processing";
    }
};


const StatusTag: React.FC<StatusTagProps> = ({ status, className = "", children }) => (
    <div className={clsx(
        "flex px-3 py-2 justify-center items-center rounded-[100px] w-fit text-sm font-bold leading-normal",
        statusClasses[status],
        className
    )}>
        {children ?? (status.charAt(0).toUpperCase() + status.slice(1))}
    </div>
);

export default StatusTag;

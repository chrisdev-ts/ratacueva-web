import React from "react";
import clsx from "clsx";

export type StatusType = "completed" | "pending" | "processing" | "cancelled";

interface StatusTagProps {
    status: StatusType;
    className?: string;
}

const statusClasses: Record<StatusType, string> = {
    completed: "bg-success text-success-dark",
    pending: "bg-warning text-warning-dark",
    processing: "bg-accent text-accent-dark",
    cancelled: "bg-danger text-danger-dark"
};

const StatusTag: React.FC<StatusTagProps> = ({ status, className = "" }) => (
    <div className={clsx(
        "flex px-3 py-2 justify-center items-center rounded-[100px] w-fit font-inter text-sm font-bold leading-normal",
        statusClasses[status],
        className
    )}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
);

export default StatusTag;

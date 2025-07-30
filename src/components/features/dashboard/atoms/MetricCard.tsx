import React from "react";
import { Display, Body } from "@/components/atoms/Typography";

interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    isPositive?: boolean;
    icon?: React.ReactNode;
    className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive = true, icon, className = "" }) => (
    <div className={`flex p-6 flex-col items-start gap-6 flex-1 rounded-lg bg-gray ${className}`}>
        <div className="flex items-center gap-2">
            {icon}
            <Body as="span">{title}</Body>
        </div>
        <Display as="div" className="text-display">{value}</Display>
        <Body as="span" className={isPositive ? "text-success" : "text-danger"}>{change}</Body>
    </div>
);

export default MetricCard;

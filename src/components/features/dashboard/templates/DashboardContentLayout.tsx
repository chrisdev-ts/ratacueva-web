import React from "react";

interface DashboardContentLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const DashboardContentLayout: React.FC<DashboardContentLayoutProps> = ({ children, className = "" }) => {
    return (
        <main className={`flex flex-col flex-1 px-[32px] ${className}`}>
            {children}
        </main>
    );
};

export default DashboardContentLayout;

import React from "react";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";

export default function Employers() {
    return (
        <div className=" text-text flex-1">
            <DashboardContentLayout>
                <h1 className="text-3xl font-bold mb-4">Empleados</h1>
                <p className="text-lg">Gestión de empleados y usuarios.</p>
            </DashboardContentLayout>
        </div>
    );
}
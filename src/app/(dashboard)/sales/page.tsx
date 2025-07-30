import React from "react";
import DashboardContentLayout from "@/components/templates/DashboardContentLayout";

export default function Sales() {
    return (
        <div className=" text-text flex-1">
            <DashboardContentLayout>
                <h1 className="text-3xl font-bold mb-4">Ventas</h1>
                <p className="text-lg">Historial y gestión de ventas.</p>
            </DashboardContentLayout>
        </div>
    );
}
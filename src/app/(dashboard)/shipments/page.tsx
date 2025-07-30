import React from "react";
import DashboardContentLayout from "@/components/templates/DashboardContentLayout";

export default function Shipments() {
    return (
        <div className=" text-text flex-1">
            <DashboardContentLayout>
                <h1 className="text-3xl font-bold mb-4">Envíos</h1>
                <p className="text-lg">Seguimiento y control de envíos.</p>
            </DashboardContentLayout>
        </div>
    );
}
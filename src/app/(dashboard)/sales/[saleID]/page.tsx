"use client";

import React, { use } from "react";
import { Display, Body } from "@/components/atoms/Typography";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import { mockSalesData } from "@/libs/salesData";
import { notFound } from "next/navigation";

interface SaleDetailPageProps {
  params: Promise<{
    saleID: string;
  }>;
}

export default function SaleDetailPage({ params }: SaleDetailPageProps) {
  const resolvedParams = use(params);
  const sale = mockSalesData.find((s) => s.id === resolvedParams.saleID);

  if (!sale) {
    notFound();
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado";
      case "pending":
        return "Pendiente";
      case "processing":
        return "En tránsito";
      case "cancelled":
        return "Cancelado";
      default:
        return status;
    }
  };

  return (
    <div className="flex flex-col max-w-none mx-auto p-8 lg:px-7 lg:py-8 gap-8 flex-1 text-text font-body">
      <DashboardContentLayout>
        <div className="flex flex-col gap-8">
          <Display>Visualizar venta</Display>

          <div className="bg-gray rounded-lg p-8 min-h-[456px] flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {/* First Row */}
              <div className="flex gap-6 flex-wrap">
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">Id de venta</Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.id}</Body>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">
                    Nombre del cliente
                  </Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.customerName}</Body>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex gap-6 flex-wrap">
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">
                    Total de productos
                  </Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.totalProducts}</Body>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">Método de pago</Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.payMethod}</Body>
                  </div>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex gap-6 flex-wrap">
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">Envío</Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.shipping}</Body>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">Total</Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.totalPrice}</Body>
                  </div>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="flex gap-6 flex-wrap">
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">Estatus</Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">
                      {getStatusText(sale.status)}
                    </Body>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
                  <Body className="text-text font-medium">Fecha</Body>
                  <div className="bg-gray border border-border rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                    <Body className="text-text">{sale.date}</Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardContentLayout>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import DashboardContentLayout from "@/components/features/dashboard/templates/DashboardContentLayout";
import { Display, Heading, Body } from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";

export default function EmployeeDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.role !== "admin") {
      router.push("/overview");
      return;
    }

    // TODO: Fetch employee data using params.employeeID
    // For now, just set loading to false
    setLoading(false);
  }, [router, params.employeeID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardContentLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <Display className="text-2xl mb-2">Detalles del Empleado</Display>

          <Body className="text-gray-500 mb-6">
            Información detallada del empleado
          </Body>

          <Heading className="text-xl mb-4">
            Empleado ID: {params.employeeID}
          </Heading>

          <Body className="text-gray-600 mb-4">
            Los detalles del empleado se mostrarán aquí una vez que se
            implemente la funcionalidad completa.
          </Body>

          <div className="flex gap-4">
            <Button onClick={() => router.back()} variant="secondary">
              Volver
            </Button>

            <Button onClick={() => router.push("/employees")}>
              Ver todos los empleados
            </Button>
          </div>
        </div>
      </div>
    </DashboardContentLayout>
  );
}

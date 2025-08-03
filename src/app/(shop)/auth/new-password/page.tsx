"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Body } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { PageLayout } from "@/components/templates/PageLayout";

const NewPasswordPage = () => {
  const router = useRouter();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error al restablecer la contraseña");
      }

      // Redirige a página de éxito
      router.push("/auth/password-reset-success");

    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : "Error al restablecer la contraseña");
    }
  };

  return (
    <PageLayout className="px-[240px]">
      <div className="self-stretch flex-1 pt-12 pb-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md flex flex-col justify-center items-center gap-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex justify-center items-center">
              <LockClosedIcon
                className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[214px] md:h-[214px] aspect-square text-white"
                aria-label="Lock icon"/>
            </div>

            <Body className="text-white text-base sm:text-lg text-center w-full">
              Ingresa tu nueva contraseña para completar el proceso de restablecimiento
            </Body>

            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="password" className="block text-white">
                Nueva contraseña
              </Body>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 8 caracteres"
                required
                className="min-w-[240px]"/>
            </div>

            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="confirmPassword" className="block text-white">
                Confirmar contraseña
              </Body>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite tu contraseña"
                required
                className="min-w-[240px]"/>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500 text-center">{errorMessage}</p>
            )}

            <Button type="submit" variant="primary" className="w-full">
              Establecer nueva contraseña
            </Button>
            
            <div className="text-center">
              <Body className="text-white">
                <a href="/auth/reset-password" className="font-bold hover:text-primary transition-colors">
                  Volver atrás
                </a>
              </Body>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default NewPasswordPage;
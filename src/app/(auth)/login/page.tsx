"use client";

import { useState } from "react";
import { Body } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      <div className="hidden lg:flex w-full lg:w-1/2 bg-gray items-center justify-center py-10 lg:py-0 order-2 lg:order-1" />
      <div className="w-full lg:w-1/2  flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-10 lg:py-0 order-1 lg:order-2">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex justify-center py-7 pb-0">
            <img src="/images/logotipo-base.svg" alt="Rata Cueva Logo" className="w-[60%] h-auto" />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="email" className="block">Correo electrónico</Body>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ej: correo@ejemplo.com" required className="min-w-[240px]" />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="password" className="block">Contraseña</Body>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required className="min-w-[240px]" />
          </div>

          <div className="text-right">
            <Body className="font-bold cursor-pointer hover:text-primary transition-colors">
              <a href="/forgot-password">
              ¿Olvidaste tu contraseña?
              </a>
            </Body>
          </div>

          <Button type="submit" variant="primary" className="w-full">Iniciar sesión</Button>

          <div className="text-center">
            <Body>
              ¿No tienes una cuenta?{" "}
              <a href="/register"
                className="font-bold hover:text-primary transition-colors">
                Regístrate
              </a>
            </Body>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";

import { useState } from "react";
import { Body } from "../../../components/common/Typography";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex w-full">
      <div className="w-1/2 bg-[hsl(var(--medium))]" />
      <div className="w-1/2 bg-[hsl(var(--dark))] flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex justify-center py-7 pb-0">
            <img src="/images/logotipo-base.svg" alt="Rata Cueva Logo" className="w-[60%] h-auto" />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="email" className="block text-white">
              Correo electrónico
            </Body>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" required
              className="w-full flex min-w-[240px] min-h-[44px] px-4 py-3 items-start gap-4 self-stretch rounded-lg border border-[#555] bg-[hsl(var(--medium))] text-white placeholder:text-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--dark))]" />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="password" className="block text-white">
              Contraseña
            </Body>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required
              className="w-full flex min-w-[240px] min-h-[44px] px-4 py-3 items-start gap-4 self-stretch rounded-lg border border-[#555] bg-[hsl(var(--medium))] text-white placeholder:text-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--dark))]"
            />
          </div>

          <div className="text-right">
            <Body as="a" href="#"
              className="font-bold text-sm text-white hover:text-[hsl(var(--accent))] transition-colors">
              ¿Olvidaste tu contraseña?
            </Body>
          </div>

          <button type="submit"
            className="w-full h-11 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center px-4 py-2.5 hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--dark))]">
            <Body className="font-bold text-base text-white">Iniciar sesión</Body>
          </button>

          <div className="text-center">
            <Body className="text-sm text-white font-normal">
              ¿No tienes una cuenta?{" "}
              <a href="/register"
                className="font-bold hover:text-[hsl(var(--accent))] transition-colors">
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

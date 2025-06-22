"use client";

import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex w-full">
      {/* Lado izquierdo */}
      <div className="w-1/2 bg-[hsl(var(--medium))]"></div>

      {/* Lado derecho */}
      <div className="w-1/2 flex flex-col justify-center items-center p-4 sm:px-12 lg:px-20">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-center m-0 py-7">
            <img
              src="/logo.svg"
              alt="Rata Cueva Logo"
              className="w-[60%] h-auto"
            />
          </div>

          {/* Formulario */}
          <div className="space-y-4 mb-4">
            <label className="block font-body font-medium text-base text-white mb-3">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full min-w-[240px] min-h-[44px] px-4 py-3 border border-[#555555] rounded-[8px] font-body font-medium text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all bg-[hsl(var(--medium))]"
              />
            </div>
          </div>

          <div className="space-y-4 my-4">
            <label className="block font-body font-medium text-base text-white mb-3">
              Contraseña
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full min-w-[240px] min-h-[44px] px-4 py-3 border border-[#555555] rounded-[8px] font-body font-medium text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all bg-[hsl(var(--medium))]"
              />
            </div>
          </div>

          <div className="text-right mb-0">
            <a
              href="#"
              className="font-body font-bold text-[15px] text-white hover:text-[hsl(var(--accent))]  transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button className="w-full min-h-[44px] bg-[hsl(var(--accent))] rounded-full flex items-center justify-center my-5 hover:bg-opacity-90 transition-all focus:outline-none focus:ring-1 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--dark))]">
            <span className="font-body font-bold text-base text-white">
              Iniciar sesión
            </span>
          </button>


          <div className="text-center">
            <span className="font-body text-[15px] text-white">
              <span className="font-normal">¿Ya tienes una cuenta? </span>
              <a
                href="#"
                className="font-bold hover:text-[hsl(var(--accent))] transition-colors"
              >
                Regístrate
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

"use client";

import { useState } from "react";
import { Body } from "@/components/atoms/Typography/index";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario de registro enviado");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 bg-dark flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-10 lg:py-0 order-1 lg:order-1">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex justify-center py-7 pb-0">
            <img
              src="/images/logotipo-base.svg"
              alt="Rata Cueva Logo"
              className="w-[60%] h-auto"
            />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="name" className="block text-text">
              Nombre
            </Body>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Juan"
              required
              className="w-full h-[44px] min-w-[240px] px-4 py-3 rounded-lg border border-border bg-gray placeholder:text-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text"
            />
          </div>

          <div className="flex gap-6 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 space-y-2">
              <Body as="label" htmlFor="lastName1" className="block text-text">
                Primer apellido
              </Body>
              <input
                id="lastName1"
                type="text"
                value={lastName1}
                onChange={(e) => setLastName1(e.target.value)}
                placeholder="Ej: López"
                required
                className="w-full h-[44px] px-4 py-3 rounded-lg border border-border bg-gray placeholder:text-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text"
              />
            </div>

            <div className="w-full sm:w-1/2 space-y-2">
              <Body as="label" htmlFor="lastName2" className="block text-text">
                Segundo apellido
              </Body>
              <input
                id="lastName2"
                type="text"
                value={lastName2}
                onChange={(e) => setLastName2(e.target.value)}
                placeholder="Ej: Pérez"
                className="w-full h-[44px] px-4 py-3 rounded-lg border border-border bg-gray placeholder:text-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="email" className="block text-text">
              Correo electrónico
            </Body>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: correo@ejemplo.com"
              required
              className="w-full h-[44px] min-w-[240px] px-4 py-3 rounded-lg border border-border bg-gray placeholder:text-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text"
            />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="password" className="block text-text">
              Contraseña
            </Body>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full h-[44px] min-w-[240px] px-4 py-3 rounded-lg border border-border bg-gray placeholder:text-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text"
            />
          </div>

          <div className="space-y-2 pb-2">
            <Body
              as="label"
              htmlFor="confirmPassword"
              className="block text-text"
            >
              Repetir contraseña
            </Body>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full h-[44px] min-w-[240px] px-4 py-3 rounded-lg border border-border bg-gray placeholder:text-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-primary rounded-full flex items-center justify-center px-4 py-2.5 hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark text-dark"
          >
            <Body className="font-bold text-text">Registrarse</Body>
          </button>

          <div className="text-center pb-8">
            <Body className="text-text">
              ¿Ya tienes una cuenta?{" "}
              <a
                href="/login"
              className="font-bold hover:text-primary transition-colors">
                Inicia sesión
              </a>
            </Body>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/2 bg-gray flex items-center justify-center py-10 lg:py-0 order-2 lg:order-2"></div>
    </div>
  );
};

export default RegisterPage;

"use client";

import { useState } from "react";
import Image from "next/image";
import { Body } from "@/components/atoms/Typography/index";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { registerUser, RegisterPayload } from "@/services/auth/register";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const payload: RegisterPayload = {
      name,
      lastName: lastName1,
      secondLastName: lastName2,
      email,
      password,
    };

    try {
      const response = await registerUser(payload);
      console.log("Usuario registrado:", response);
      router.push("/login");
    } catch (error: unknown) {
      console.error("Error al registrar:", error);
      const errorMessage =
        error && typeof error === "object" && "response" in error
          ? (error.response as { data?: { message?: string } })?.data
              ?.message ||
            (error as { message?: string })?.message ||
            "Hubo un error al registrar"
          : "Hubo un error al registrar";
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2  flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-10 lg:py-0 order-1 lg:order-1">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex justify-center py-7 pb-0">
            <Image
              src="/images/logotipo-base.svg"
              alt="Rata Cueva Logo"
              className="w-[60%] h-auto"
              width={240}
              height={80}/>
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="name" className="block text-text">
              Nombre
            </Body>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Juan"
              required
              className="min-w-[240px]"/>
          </div>

          <div className="flex gap-6 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 space-y-2">
              <Body as="label" htmlFor="lastName1" className="block text-text">
                Primer apellido
              </Body>
              <Input
                id="lastName1"
                type="text"
                value={lastName1}
                onChange={(e) => setLastName1(e.target.value)}
                placeholder="Ej: López"
                required
                className="w-full min-w-0"
              />
            </div>

            <div className="w-full sm:w-1/2 space-y-2">
              <Body as="label" htmlFor="lastName2" className="block text-text">
                Segundo apellido
              </Body>
              <Input
                id="lastName2"
                type="text"
                value={lastName2}
                onChange={(e) => setLastName2(e.target.value)}
                placeholder="Ej: Pérez"
                className="w-full min-w-0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="email" className="block text-text">
              Correo electrónico
            </Body>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: correo@ejemplo.com"
              required
              className="min-w-[240px]"/>
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="password" className="block text-text">
              Contraseña
            </Body>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="min-w-[240px]"/>
          </div>

          <div className="space-y-2 pb-2">
            <Body
              as="label"
              htmlFor="confirmPassword"
              className="block text-text">
              Repetir contraseña
            </Body>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              required
              className="min-w-[240px]"/>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Registrarse
          </Button>

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

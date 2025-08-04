"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Body } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { login } from "@/services/auth/login";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const router = useRouter();
  const { login: loginContext } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Elimina cualquier token/usuario anterior antes de guardar los nuevos
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      const data = await login({ email, password });
      console.log("Login exitoso:", data);
      // Guarda el token y el usuario
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      loginContext(data.token, data.user); // Actualiza el contexto global
      console.log("Token y usuario guardados en localStorage");
      // Redirige según el rol
      const role = data.user?.role;
      if (role === "client") {
        router.push("/settings");
        console.log("Redirigiendo a /settings por rol client");
      } else if (role === "admin" || role === "employee") {
        router.push("/overview");
        console.log("Redirigiendo a /overview por rol admin/employee");
      } else {
        router.push("/");
        console.log("Rol desconocido, redirigiendo a /");
      }
    } catch (error: any) {
      console.error("Error en login:", error);
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Error al iniciar sesión"
      );
    }
    // Verifica si el token está en localStorage después del intento
    setTimeout(() => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      console.log("Token en localStorage tras login:", token);
      console.log("User en localStorage tras login:", user);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      <div className="hidden lg:flex w-full lg:w-1/2 bg-gray items-center justify-center py-10 lg:py-0 order-2 lg:order-1" />
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-10 lg:py-0 order-1 lg:order-2">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex justify-center py-7 pb-0">
            <img
              src="/images/logotipo-base.svg"
              alt="Rata Cueva Logo"
              className="w-[60%] h-auto"
            />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="email" className="block">
              Correo electrónico
            </Body>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: correo@ejemplo.com"
              required
              className="min-w-[240px]"
            />
          </div>

          <div className="space-y-2">
            <Body as="label" htmlFor="password" className="block">
              Contraseña
            </Body>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="min-w-[240px]"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500 text-center">{errorMessage}</p>
          )}

          <div className="text-right">
            <Body className="font-bold cursor-pointer hover:text-primary transition-colors">
              <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </Body>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Iniciar sesión
          </Button>

          <div className="text-center">
            <Body>
              ¿No tienes una cuenta?{" "}
              <a
                href="/register"
                className="font-bold hover:text-primary transition-colors"
              >
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

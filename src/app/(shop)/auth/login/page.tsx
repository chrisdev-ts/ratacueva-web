"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Body } from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { useAuth } from "@/contexts/AuthContext";
import { PageLayout } from "@/components/templates/PageLayout";
import Image from "next/image";
import { login as loginService } from "@/services/auth/login";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const data = await loginService({ email, password });

      // Asegurar que el usuario tenga un id (usar _id si id no existe)
      const userData = {
        ...data.user,
        id: data.user.id || data.user._id || '',
      };

      login(data.token, userData);

      router.push("/settings");
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response: { data: { message?: string } } };
        setErrorMessage(
          axiosError.response.data.message || "Error al iniciar sesión"
        );
      } else if (error && typeof error === 'object' && 'request' in error) {
        setErrorMessage("Error de conexión. Verifica tu internet.");
      } else {
        setErrorMessage("Error inesperado. Inténtalo de nuevo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout className="px-[240px]">
      <div className="self-stretch flex-1 pt-12 pb-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md flex flex-col justify-center items-center gap-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex justify-center py-7 pb-0">
              <Image
                src="/images/logotipo-base.svg"
                alt="Rata Cueva Logo"
                width={126}
                height={22}
                className="w-[60%] h-auto"
                style={{ height: 'auto' }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="email" className="block text-white">
                Correo electrónico
              </Body>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ej: correo@ejemplo.com"
                required
                disabled={isLoading}
                className="min-w-[240px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="password" className="block text-white">
                Contraseña
              </Body>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                disabled={isLoading}
                className="min-w-[240px]"
              />
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500 text-center">{errorMessage}</p>
            )}

            <div className="text-right">
              <Body className="font-bold cursor-pointer hover:text-primary transition-colors">
                <a href="/auth/forgot-password">¿Olvidaste tu contraseña?</a>
              </Body>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>

            <div className="text-center">
              <Body className="text-white">
                ¿No tienes una cuenta?{" "}
                <a
                  href="/auth/register"
                  className="font-bold hover:text-primary transition-colors"
                >
                  Regístrate
                </a>
              </Body>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
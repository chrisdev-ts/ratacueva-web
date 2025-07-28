"use client";

import { Body } from "@/components/atoms/Typography";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const PasswordResetSuccessPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica futura para envío de código
  };

  return (
    <div className="min-h-screen w-full bg-dark relative">
      <div className="absolute top-15 left-20">
        <img
          src="/images/logotipo-base.svg"
          alt="Rata Cueva Logo"
          className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
        />
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-12 lg:px-20 py-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex justify-center items-center pt-5">
            <ArrowPathIcon
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[214px] md:h-[214px] aspect-square"
              aria-label="Restart icon"
            />
          </div>

          <Body className="text-base sm:text-lg text-center w-full max-w-lg px-2.5 sm:px-0 text-text">
            Tu contraseña ha sido restablecida exitosamente.
          </Body>

          <button
            type="submit"
            className="h-11 bg-primary rounded-full flex items-center justify-center px-4 py-2.5 hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark mx-auto text-dark"
                        aria-label="Ir a inicio de sesión">
            <Body className="font-bold text-base text-text">Inicio de sesión</Body>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetSuccessPage;

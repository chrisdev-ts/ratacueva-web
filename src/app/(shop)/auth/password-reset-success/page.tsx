"use client";

import { Body } from "@/components/atoms/Typography";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Button from "@/components/atoms/Button";
import { PageLayout } from "@/components/templates/PageLayout";
import { useRouter } from "next/navigation";

const PasswordResetSuccessPage = () => {
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/login");
  };

  return (
    <PageLayout className="px-[240px]">
      <div className="self-stretch flex-1 pt-12 pb-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md flex flex-col justify-center items-center gap-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex justify-center items-center">
              <ArrowPathIcon
                className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[214px] md:h-[214px] aspect-square text-white"
                aria-label="Restart icon"/>
            </div>

            <Body className="text-base sm:text-lg text-center w-full text-white">
              Tu contraseña ha sido restablecida exitosamente.
            </Body>

            <Button type="submit" variant="primary" className="w-full">
              Inicio de sesión
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default PasswordResetSuccessPage;
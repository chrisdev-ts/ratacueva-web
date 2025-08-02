"use client";

import { Body } from "@/components/atoms/Typography/index";
import Button from "@/components/atoms/Button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { PageLayout } from "@/components/templates/PageLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
    const router = useRouter();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/auth/reset-password");
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
                            />
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <ArrowPathIcon className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[214px] md:h-[214px] aspect-square text-white" aria-label="Restart icon" />
                        </div>
                        
                        <Body className="text-base sm:text-lg text-center w-full text-white">
                            Haz clic en el botón para solicitar un código de restablecimiento, posteriormente introdúcelo en el formulario de la siguiente interfaz
                        </Body>
                        
                        <Button type="submit" variant="primary" className="w-full">
                            Solicitar código de restablecimiento
                        </Button>
                        
                        <div className="text-center">
                            <Body className="text-white">
                                <a href="/auth/login" className="font-bold hover:text-primary transition-colors">
                                    Volver al inicio de sesión
                                </a>
                            </Body>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
};

export default ForgotPasswordPage;
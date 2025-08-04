"use client";

import { useState } from "react";
import { Body } from "@/components/atoms/Typography/index";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { registerUser, RegisterPayload } from "@/services/auth/register";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/templates/PageLayout";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface ValidationErrors {
  name?: string[];
  lastName?: string[];
  email?: string[];
  password?: string[];
  [key: string]: string[] | undefined;
}

// Password validation requirements
const passwordRequirements = [
  {
    label: 'Al menos 6 caracteres',
    test: (pw: string) => pw.length >= 6,
  },
  {
    label: 'Al menos una mayúscula',
    test: (pw: string) => /[A-Z]/.test(pw),
  },
  {
    label: 'Al menos una minúscula',
    test: (pw: string) => /[a-z]/.test(pw),
  },
  {
    label: 'Al menos un número',
    test: (pw: string) => /[0-9]/.test(pw),
  },
  {
    label: 'Al menos un carácter especial',
    test: (pw: string) => /[^A-Za-z0-9]/.test(pw),
  },
];

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false); // Nuevo estado para saber si el campo fue tocado

  const router = useRouter();

  // Password validation checks
  const passwordChecks = passwordRequirements.map(req => req.test(password));
  const allPasswordValid = passwordChecks.every(Boolean);

  const clearErrors = () => {
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    // Client-side validation
    if (password !== confirmPassword) {
      setErrors({ password: ["Las contraseñas no coinciden"] });
      return;
    }

    // Validate password requirements
    if (!allPasswordValid) {
      setErrors({ password: ["La contraseña no cumple con todos los requisitos"] });
      return;
    }

    setIsSubmitting(true);

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
      router.push("/auth/login");
    } catch (error: unknown) {
      console.error("Error al registrar:", error);
      
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { 
          response?: { 
            data?: { errors?: ValidationErrors, message?: string },
            status?: number 
          } 
        };
        
        // Handle specific HTTP status codes
        if (axiosError.response?.status === 409) {
          setErrors({ 
            email: ["Este correo electrónico ya está registrado. Por favor, usa otro correo o inicia sesión."] 
          });
        } else if (axiosError.response?.data?.errors) {
          // Handle validation errors from API
          setErrors(axiosError.response.data.errors);
        } else if (axiosError.response?.data?.message) {
          // Handle general API error messages
          setErrors({ 
            general: [axiosError.response.data.message] 
          });
        } else {
          // Handle other errors
          setErrors({ 
            general: ["Hubo un error al registrar. Por favor, intenta de nuevo."] 
          });
        }
      } else {
        // Handle other errors
        setErrors({ 
          general: ["Hubo un error al registrar. Por favor, intenta de nuevo."] 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: string): string | undefined => {
    return errors[fieldName]?.[0];
  };

  const hasFieldError = (fieldName: string): boolean => {
    return !!errors[fieldName]?.length;
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

            {/* General error message */}
            {errors.general && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <Body className="text-red-400 text-sm">
                  {errors.general[0]}
                </Body>
              </div>
            )}



            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="name" className="block text-white">
                Nombre
              </Body>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (hasFieldError('name')) clearErrors();
                }}
                placeholder="Ej: Juan"
                required
                className={`min-w-[240px] ${hasFieldError('name') ? 'border-red-500' : ''}`}
              />
              {getFieldError('name') && (
                <Body className="text-red-400 text-sm mt-1">
                  {getFieldError('name')}
                </Body>
              )}
            </div>

            <div className="flex gap-6 flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <Body as="label" htmlFor="lastName1" className="block text-white">
                  Primer apellido
                </Body>
                <Input
                  id="lastName1"
                  type="text"
                  value={lastName1}
                  onChange={(e) => {
                    setLastName1(e.target.value);
                    if (hasFieldError('lastName')) clearErrors();
                  }}
                  placeholder="Ej: López"
                  required
                  className={`w-full min-w-0 ${hasFieldError('lastName') ? 'border-red-500' : ''}`}
                />
                {getFieldError('lastName') && (
                  <Body className="text-red-400 text-sm mt-1">
                    {getFieldError('lastName')}
                  </Body>
                )}
              </div>

              <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <Body as="label" htmlFor="lastName2" className="block text-white">
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

            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="email" className="block text-white">
                Correo electrónico
              </Body>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (hasFieldError('email')) clearErrors();
                }}
                placeholder="Ej: correo@ejemplo.com"
                required
                className={`min-w-[240px] ${hasFieldError('email') ? 'border-red-500' : ''}`}
              />
              {getFieldError('email') && (
                <Body className="text-red-400 text-sm mt-1">
                  {getFieldError('email')}
                </Body>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Body as="label" htmlFor="password" className="block text-white">
                Contraseña
              </Body>
              <div className="relative">
                <Input
                  id="password"
                  type="text"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordTouched(true); // Marcar como tocado cuando el usuario empiece a escribir
                    if (hasFieldError('password')) clearErrors();
                  }}
                  placeholder="********"
                  required
                  className={`min-w-[240px] pr-10 ${hasFieldError('password') ? 'border-red-500' : ''}`}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {/* Password requirements - solo muestra las que faltan */}
              {passwordTouched && password && (
                <div className="mt-2 space-y-1">
                  {passwordRequirements.map((req, index) => {
                    // Solo mostrar si NO se cumple
                    if (passwordChecks[index]) return null;
                    
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <XMarkIcon className="w-4 h-4 text-red-500" />
                        <Body className="text-xs text-red-400">
                          {req.label}
                        </Body>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {getFieldError('password') && (
                <div className="mt-1">
                  {errors.password?.map((error, index) => (
                    <Body key={index} className="text-red-400 text-sm block">
                      • {error}
                    </Body>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Body
                as="label"
                htmlFor="confirmPassword"
                className="block text-white"
              >
                Repetir contraseña
              </Body>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="text"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="min-w-[240px] pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <Body className="text-red-400 text-sm mt-1">
                  Las contraseñas no coinciden
                </Body>
              )}
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              disabled={isSubmitting || !allPasswordValid || password !== confirmPassword}
            >
              {isSubmitting ? "Registrando..." : "Registrarse"}
            </Button>

            <div className="text-center">
              <Body className="text-white">
                ¿Ya tienes una cuenta?{" "}
                <a
                  href="/auth/login"
                  className="font-bold hover:text-primary transition-colors">
                  Inicia sesión
                </a>
              </Body>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default RegisterPage;
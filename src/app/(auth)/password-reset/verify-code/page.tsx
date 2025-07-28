"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AuthHeader from "@/components/landing/home/auth-header"
import { verifyCodeSchema, type VerifyCodeFormData } from "@/schemas"

const ResetCodeVerificationPage = () => {
  const [isVerified, setIsVerified] = useState(false)

  const form = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: "",
    },
  })

  function onSubmit(values: VerifyCodeFormData) {
    console.log("Verification code:", values.code)
    toast.success("Código verificado", {
      description: "Tu código ha sido verificado correctamente",
    })
    setIsVerified(true)
  }

  const handleResendCode = () => {
    toast.info("Código reenviado", {
      description: "Se ha enviado un nuevo código a tu correo electrónico",
    })
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <AuthHeader />
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-4 sm:px-12 lg:px-20 py-10">
        <div className="w-full max-w-md">
          {!isVerified ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-pink-600/20 rounded-full flex items-center justify-center">
                      <Shield className="w-12 h-12 text-pink-400" />
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Verificar Código</h1>
                  <p className="text-zinc-300 text-base lg:text-lg">
                    Ingresa el código de 6 dígitos que enviamos a tu correo electrónico
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Código de verificación</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123456"
                          maxLength={6}
                          className="h-[44px] min-w-[240px] text-center text-2xl font-mono tracking-widest border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 6)
                            field.onChange(value)
                          }}
                          value={field.value}
                        />
                      </FormControl>
                      <FormDescription className="text-zinc-400 text-center">
                        Ingresa los 6 dígitos sin espacios
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.watch("code").length !== 6}
                  className="w-full h-11 bg-pink-600 hover:bg-pink-700 disabled:bg-zinc-600 disabled:cursor-not-allowed rounded-full font-bold text-white"
                >
                  Verificar código
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-zinc-400 text-sm">¿No recibiste el código?</p>
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="font-bold text-pink-400 hover:text-pink-300 transition-colors text-sm"
                  >
                    Reenviar código
                  </button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-pink-600/20 rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-pink-400" />
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Código Verificado</h1>
              <p className="text-zinc-300 text-base lg:text-lg mb-6">
                Tu código ha sido verificado correctamente. Ahora puedes crear una nueva contraseña.
              </p>
              <Link
                href="/password-reset/new-password"
                className="inline-block w-full h-11 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center px-4 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <span className="font-bold text-base text-white">Crear nueva contraseña</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResetCodeVerificationPage

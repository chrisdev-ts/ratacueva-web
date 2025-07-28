"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AuthHeader from "@/components/landing/home/auth-header"
import { resetRequestSchema, type ResetRequestFormData } from "@/schemas"

const RequestPasswordResetPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ResetRequestFormData>({
    resolver: zodResolver(resetRequestSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: ResetRequestFormData) {
    console.log("Password reset requested for:", values.email)
    toast.success("Código enviado", {
      description: `Se ha enviado un código de restablecimiento a ${values.email}`,
    })
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <AuthHeader />
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-4 sm:px-12 lg:px-20 py-10">
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-pink-600/20 rounded-full flex items-center justify-center">
                      <Mail className="w-12 h-12 text-pink-400" />
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Restablecer Contraseña</h1>
                  <p className="text-zinc-300 text-base lg:text-lg">
                    Ingresa tu correo electrónico y te enviaremos un código para restablecer tu contraseña
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Correo electrónico</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Ej: correo@ejemplo.com"
                          className="h-[44px] border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-11 bg-pink-600 hover:bg-pink-700 rounded-full font-bold text-white"
                >
                  Enviar código de restablecimiento
                </Button>

                <div className="text-center">
                  <span className="text-zinc-400">
                    ¿Recordaste tu contraseña?{" "}
                    <Link href="/login" className="font-bold text-pink-400 hover:text-pink-300 transition-colors">
                      Inicia sesión
                    </Link>
                  </span>
                </div>
              </form>
            </Form>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-green-600/20 rounded-full flex items-center justify-center">
                  <Mail className="w-12 h-12 text-green-400" />
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Código Enviado</h1>
              <p className="text-zinc-300 text-base lg:text-lg mb-6">
                Hemos enviado un código de restablecimiento a{" "}
                <strong className="text-white">{form.getValues("email")}</strong>
              </p>
              <Link
                href="/password-reset/verify-code"
                className="inline-block w-full h-11 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center px-4 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <span className="font-bold text-base text-white">Continuar</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RequestPasswordResetPage

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSchema, type LoginFormData } from "@/schemas"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: LoginFormData) {
    console.log("Login attempt:", values)
    toast.success("¡Inicio de sesión exitoso!", {
      description: "Bienvenido de vuelta a RataCueva",
    })
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      {/* Right side - Image/Brand section */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-zinc-800 items-center justify-center py-10 lg:py-0 order-2 lg:order-1">
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Gaming Setup"
            width={400}
            height={300}
            className="mx-auto mb-8 rounded-lg"
          />
          <h2 className="text-3xl font-bold text-white mb-4">Bienvenido a RataCueva</h2>
          <p className="text-zinc-300 text-lg max-w-md">Descubre los mejores productos gaming y arma tu setup ideal</p>
        </div>
      </div>

      {/* Left side - Login form */}
      <div className="w-full lg:w-1/2 bg-zinc-900 flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-10 lg:py-0 order-1 lg:order-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Iniciar Sesión</h1>
              <p className="text-zinc-400">Accede a tu cuenta para continuar</p>
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
                      className="h-[44px] min-w-[240px] border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="h-[44px] min-w-[240px] pr-12 border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-right">
              <Link
                href="/password-reset/request"
                className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-pink-600 hover:bg-pink-700 rounded-full font-bold text-white"
            >
              Iniciar sesión
            </Button>

            <div className="text-center">
              <span className="text-zinc-400">
                ¿No tienes una cuenta?{" "}
                <Link href="/register" className="font-bold text-pink-400 hover:text-pink-300 transition-colors">
                  Regístrate
                </Link>
              </span>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage

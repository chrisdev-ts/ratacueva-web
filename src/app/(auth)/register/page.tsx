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
import { registerSchema, type RegisterFormData } from "@/schemas"

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName1: "",
      lastName2: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: RegisterFormData) {
    console.log("Register attempt:", values)
    toast.success("¡Cuenta creada exitosamente!", {
      description: "Bienvenido a la comunidad gaming de RataCueva",
    })
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      {/* Left side - Register form */}
      <div className="w-full lg:w-1/2 bg-zinc-900 flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-10 lg:py-0 order-1 lg:order-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Crear Cuenta</h1>
              <p className="text-zinc-400">Únete a la comunidad gaming</p>
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nombre</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: Juan"
                      className="h-[44px] min-w-[240px] border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 flex-col sm:flex-row">
              <FormField
                control={form.control}
                name="lastName1"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-1/2">
                    <FormLabel className="text-white">Primer apellido</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: López"
                        className="h-[44px] border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName2"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-1/2">
                    <FormLabel className="text-white">Segundo apellido</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: Pérez"
                        className="h-[44px] border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="pb-2">
                  <FormLabel className="text-white">Repetir contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="********"
                        className="h-[44px] min-w-[240px] pr-12 border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:border-pink-500 focus-visible:ring-offset-0"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-11 bg-pink-600 hover:bg-pink-700 rounded-full font-bold text-white"
            >
              Registrarse
            </Button>

            <div className="text-center pb-8">
              <span className="text-zinc-400">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="font-bold text-pink-400 hover:text-pink-300 transition-colors">
                  Inicia sesión
                </Link>
              </span>
            </div>
          </form>
        </Form>
      </div>

      {/* Right side - Image/Brand section */}
      <div className="w-full lg:w-1/2 bg-zinc-800 flex items-center justify-center py-10 lg:py-0 order-2 lg:order-2">
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Gaming Community"
            width={400}
            height={300}
            className="mx-auto mb-8 rounded-lg"
          />
          <h2 className="text-3xl font-bold text-white mb-4">Únete a RataCueva</h2>
          <p className="text-zinc-300 text-lg max-w-md">
            Forma parte de la comunidad gaming más grande y descubre ofertas exclusivas
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

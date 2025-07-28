"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Lock, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AuthHeader from "@/components/landing/home/auth-header"
import { newPasswordSchema, type NewPasswordFormData } from "@/schemas"

const NewPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const form = useForm<NewPasswordFormData>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: NewPasswordFormData) {
    console.log("Password reset:", values)
    toast.success("¡Contraseña restablecida!", {
      description: "Tu contraseña ha sido restablecida exitosamente",
    })
    setIsReset(true)
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <AuthHeader />
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-4 sm:px-12 lg:px-20 py-10">
        <div className="w-full max-w-md">
          {!isReset ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-pink-600/20 rounded-full flex items-center justify-center">
                      <Lock className="w-12 h-12 text-pink-400" />
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Nueva Contraseña</h1>
                  <p className="text-zinc-300 text-base lg:text-lg">Crea una nueva contraseña segura para tu cuenta</p>
                </div>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nueva contraseña</FormLabel>
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
                      <FormDescription className="text-zinc-400">
                        Mínimo 8 caracteres con mayúscula, minúscula y número
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Confirmar contraseña</FormLabel>
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
                  Restablecer contraseña
                </Button>
              </form>
            </Form>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-pink-600/20 rounded-full flex items-center justify-center">
                  <Lock className="w-12 h-12 text-pink-400" />
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">¡Contraseña Restablecida!</h1>
              <p className="text-zinc-300 text-base lg:text-lg mb-6">
                Tu contraseña ha sido restablecida exitosamente. Ya puedes iniciar sesión con tu nueva contraseña.
              </p>
              <Link
                href="/login"
                className="inline-block w-full h-11 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center px-4 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <span className="font-bold text-base text-white">Iniciar sesión</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewPasswordPage

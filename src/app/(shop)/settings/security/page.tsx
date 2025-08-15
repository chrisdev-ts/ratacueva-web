"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { ChevronLeftIcon, EyeIcon, EyeSlashIcon, ShieldCheckIcon, KeyIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"

export default function SecurityPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <PageLayout>
      <div className="pt-12 pb-8">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/settings" className="text-white hover:text-primary transition-colors">
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
            <div className="text-white text-2xl font-bold">Seguridad</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-dark rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="w-6 h-6 text-primary" />
              <div className="text-white text-xl font-bold">Cambiar contraseña</div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Contraseña actual</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    className="w-full p-3 bg-dark text-white rounded-lg border border-dark focus:border-pink-600 focus:outline-none pr-12"/>
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark hover:text-white">
                    {showCurrentPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Nueva contraseña</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="w-full p-3 bg-dark text-white rounded-lg border border-dark focus:border-pink-600 focus:outline-none pr-12"/>
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark hover:text-white">
                    {showNewPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Confirmar nueva contraseña</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full p-3 bg-dark text-white rounded-lg border border-dark focus:border-pink-600 focus:outline-none pr-12"/>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark hover:text-white">
                    {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-dark rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <KeyIcon className="w-6 h-6 text-primary" />
              <div className="text-white text-xl font-bold">Autenticación de dos factores</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Verificación en dos pasos</div>
                <div className="text-dark text-sm">Añade una capa extra de seguridad a tu cuenta</div>
              </div>
              <button className="px-4 py-2 bg-primary hover:bg-primary/80 transition-colors text-white font-medium rounded-lg">
                Activar
              </button>
            </div>
          </div>

          <div className="p-6 bg-dark rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <DevicePhoneMobileIcon className="w-6 h-6 text-primary" />
              <div className="text-white text-xl font-bold">Dispositivos conectados</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-dark rounded-lg">
                <div>
                  <div className="text-white font-medium">Chrome en Windows</div>
                  <div className="text-dark text-sm">Última actividad: hace 2 horas</div>
                </div>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                  Cerrar sesión
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-dark rounded-lg">
                <div>
                  <div className="text-white font-medium">Safari en iPhone</div>
                  <div className="text-dark text-sm">Última actividad: hace 1 día</div>
                </div>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-primary hover:bg-primary/80 transition-colors text-white font-bold rounded-lg">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
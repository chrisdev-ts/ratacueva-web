"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { CalendarIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Body, BodySmall } from "@/components/atoms/Typography"
import { getUserProfile, updateUserProfile } from "@/services/settings/personal-info"
import { useAuth } from "@/contexts/AuthContext"
interface UserProfile {
  id: string;
  name: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phone: string;
  role: string;
}

export default function PersonalInfoPage() {
  const { user, updateUser } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    secondLastName: "",
    phone: ""
  });

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const userProfile = await getUserProfile();
        setProfile(userProfile);
        setFormData({
          name: userProfile.name || "",
          lastName: userProfile.lastName || "",
          secondLastName: userProfile.secondLastName || "",
          phone: userProfile.phone || ""
        });
      } catch (error: unknown) {
        console.error('Error fetching profile:', error);
        setError("Error al cargar el perfil del usuario");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setUpdating(true);
      setError("");
      setSuccess("");

      const updatedProfile = await updateUserProfile(formData);
      setProfile(updatedProfile);
      setSuccess("Perfil actualizado correctamente");
      
      // Update user context with new data
      if (user) {
        const updatedUser = {
          ...user,
          name: updatedProfile.name,
          lastName: updatedProfile.lastName,
          secondLastName: updatedProfile.secondLastName,
          phone: updatedProfile.phone
        };
        updateUser(updatedUser);
      }
      
    } catch (error: unknown) {
      console.error('Error updating profile:', error);
      const errorMessage = error instanceof Error ? error.message : "Error al actualizar el perfil";
      setError(errorMessage);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <PageLayout className="px-[240px]">
        <div className="pt-8 pb-4">
          <SettingsBreadcrumb
            items={[
              { label: "Configuración", href: "/settings" },
              { label: "Información personal" },
            ]}
            title="Información personal"
            color="text-white"
            className="mb-8"/>
          <div className="overflow-hidden rounded-lg bg-gray p-8">
            <div className="text-white text-center">Cargando...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="px-[240px]">
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Información personal" },
          ]}
          title="Información personal"
          color="text-white"
          className="mb-8"/>
        <div className="overflow-hidden rounded-lg bg-gray p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col items-start gap-6 self-stretch">
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="fullName" className="text-base font-medium text-white">
                  Nombre completo
                </BodySmall>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required/>
              </div>
              
              <div className="flex w-full items-start gap-4 sm:gap-6">
                <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                  <BodySmall as="label" htmlFor="firstName" className="text-base font-medium text-white">
                    Primer apellido
                  </BodySmall>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required/>
                </div>
                <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                  <BodySmall as="label" htmlFor="secondName" className="text-base font-medium text-white">
                    Segundo apellido
                  </BodySmall>
                  <Input
                    id="secondName"
                    type="text"
                    value={formData.secondLastName}
                    onChange={(e) => handleInputChange("secondLastName", e.target.value)}/>
                </div>
              </div>
              
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="email" className="text-base font-medium text-white">
                  Correo electrónico
                </BodySmall>
                <Input
                  id="email"
                  type="email"
                  value={profile?.email || ""}
                  disabled
                  className="text-neutral-400"/>
              </div>
              
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="phoneNumber" className="text-base font-medium text-white">
                  Número de teléfono
                </BodySmall>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required/>
              </div>
              
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="birthDate" className="text-base font-medium text-white">
                  Fecha de nacimiento
                </BodySmall>
                <div className="flex h-[44px] w-full items-center justify-between rounded-lg border border-neutral-600 bg-gray px-4 py-3 box-border">
                  <Body className="text-base font-medium text-white">20/07/2004</Body>
                  <CalendarIcon className="h-6 w-6 text-white flex-shrink-0" />
                </div>
              </div>
              
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="currentPassword" className="text-base font-medium text-white">
                  Contraseña actual
                </BodySmall>
                <Input
                  id="currentPassword"
                  type="password"
                  defaultValue="********"
                  className="text-neutral-400"
                  disabled
                  autoComplete="current-password"/>
              </div>
              
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="newPassword" className="text-base font-medium text-white">
                  Nueva contraseña
                </BodySmall>
                <Input
                  id="newPassword"
                  type="password"
                  autoComplete="new-password"/>
              </div>
              
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="repeatNewPassword" className="text-base font-medium text-white">
                  Repetir nueva contraseña
                </BodySmall>
                <Input
                  id="repeatNewPassword"
                  type="password"
                  autoComplete="new-password"/>
              </div>
            </div>

            {/* Error and Success Messages */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
                <Body className="text-red-400">{error}</Body>
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg">
                <Body className="text-green-400">{success}</Body>
              </div>
            )}
            
            <div className="flex w-full justify-end">
              <Button 
                type="submit"
                disabled={updating}>
                <CheckIcon className="w-5 h-5 mr-2" />
                {updating ? "Actualizando..." : "Actualizar"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { MapPinIcon, PlusIcon, PencilIcon, TrashIcon, StarIcon } from "@heroicons/react/24/outline"
import { Body, Subheading } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { getAddresses, deleteAddress, setDefaultAddress, Address } from "@/services/settings/address"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"

export default function AddressesPage() {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [settingDefault, setSettingDefault] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch addresses on component mount
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setLoading(true);
        setError("");
        const userAddresses = await getAddresses();
        setAddresses(userAddresses);
      } catch (error: unknown) {
        console.error('Error fetching addresses:', error);
        setError("Error al cargar las direcciones");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchAddresses();
    }
  }, [user]);

  const handleDeleteAddress = async (id: string) => {
    try {
      setDeleting(id);
      setError("");
      setSuccess("");
      
      await deleteAddress(id);
      setAddresses(prev => prev.filter(address => address._id !== id));
      setSuccess("Dirección eliminada correctamente");
    } catch (error: unknown) {
      console.error('Error deleting address:', error);
      const errorMessage = error && typeof error === 'object' && 'response' in error 
        ? (error.response as { data?: { message?: string } })?.data?.message || "Error al eliminar la dirección"
        : "Error al eliminar la dirección";
      setError(errorMessage);
    } finally {
      setDeleting(null);
    }
  };

  const handleSetDefault = async (id: string) => {
    try {
      setSettingDefault(id);
      setError("");
      setSuccess("");
      
      await setDefaultAddress(id);
      setAddresses(prev => prev.map(address => ({
        ...address,
        isDefault: address._id === id
      })));
      setSuccess("Dirección predeterminada actualizada");
    } catch (error: unknown) {
      console.error('Error setting default address:', error);
      const errorMessage = error && typeof error === 'object' && 'response' in error 
        ? (error.response as { data?: { message?: string } })?.data?.message || "Error al establecer la dirección predeterminada"
        : "Error al establecer la dirección predeterminada";
      setError(errorMessage);
    } finally {
      setSettingDefault(null);
    }
  };

  const formatAddress = (address: Address) => {
    const parts = [
      address.street,
      address.externalNumber && `No. ${address.externalNumber}`,
      address.internalNumber && `Int. ${address.internalNumber}`,
      address.neighborhood,
      address.city,
      address.state,
      address.postalCode,
      address.country
    ].filter(Boolean);
    
    return parts.join(", ");
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4">
          <SettingsBreadcrumb
            items={[
              { label: "Configuración", href: "/settings" },
              { label: "Direcciones" },
            ]}
            title="Direcciones"
            color="text-white"
            className="mb-8"
          />
          <div className="space-y-6">
            <div className="text-white text-center">Cargando direcciones...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Direcciones" },
          ]}
          title="Direcciones"
          color="text-white"
          className="mb-8"
        />
        
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

        <div className="space-y-6">
          <div className="space-y-4">
            {addresses.length === 0 ? (
              <div className="text-center py-12">
                <MapPinIcon className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                <Body className="text-white text-xl mb-2">No tienes direcciones guardadas</Body>
                <Body className="text-zinc-400">Agrega una dirección para realizar envíos más rápido</Body>
              </div>
            ) : (
              addresses.map((address) => (
                <div key={address._id} className="p-6 bg-gray rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 relative bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPinIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Subheading className="text-white font-medium">
                            {address.isDefault && (
                              <span className="inline-flex items-center gap-1 mr-2 px-2 py-1 bg-primary text-white text-xs rounded-full">
                                <StarIcon className="w-3 h-3" />
                                Predeterminada
                              </span>
                            )}
                            Dirección de entrega
                          </Subheading>
                        </div>
                        <Body className="text-zinc-400 text-sm leading-relaxed">
                          {formatAddress(address)}
                        </Body>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch gap-2 ml-4">
                      {!address.isDefault && (
                        <Button 
                          className="min-w-[140px]" 
                          onClick={() => handleSetDefault(address._id)}
                          disabled={settingDefault === address._id}
                        >
                          <StarIcon className="w-4 h-4 mr-2" />
                          {settingDefault === address._id ? "Estableciendo..." : "Predeterminar"}
                        </Button>
                      )}
                      <Link href={`/settings/addresses/${address._id}/edit`}>
                        <Button className="min-w-[140px]">
                          <PencilIcon className="w-4 h-4 mr-2" />
                          Editar
                        </Button>
                      </Link>
                      <Button 
                        className="min-w-[140px]" 
                        onClick={() => handleDeleteAddress(address._id)}
                        disabled={deleting === address._id}
                      >
                        <TrashIcon className="w-4 h-4 mr-2" />
                        {deleting === address._id ? "Eliminando..." : "Eliminar"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Add New Address Button - Moved to bottom */}
          <div className="flex justify-end pt-4">
            <Link href="/settings/addresses/new-address">
              <Button className="flex items-center gap-2">
                <PlusIcon className="w-5 h-5" />
                Agregar nueva dirección
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

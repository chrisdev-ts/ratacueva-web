import Image from "next/image";
import Link from "next/link";
import { Body } from "@/components/atoms/Typography";
import {
    HomeIcon,
    ShoppingCartIcon,
    UsersIcon,
    TruckIcon,
    CubeIcon,
    Cog6ToothIcon,
    ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/solid';

const navigationItems = [
    {
        name: "Inicio",
        icon: <HomeIcon className="w-6 h-6 text-white" />,
        href: "/overview",
    },
    {
        name: "Productos",
        icon: <CubeIcon className="w-6 h-6 text-white" />,
        href: "/items",
    },
    {
        name: "Empleados",
        icon: <UsersIcon className="w-6 h-6 text-white" />,
        href: "/employers",
    },
    {
        name: "Envíos",
        icon: <TruckIcon className="w-6 h-6 text-white" />,
        href: "/shipments",
    },
    {
        name: "Ventas",
        icon: <ShoppingCartIcon className="w-6 h-6 text-white" />,
        href: "/sales",
    },
];

const bottomNavigationItems = [
    {
        name: "Configuración",
        icon: <Cog6ToothIcon className="w-6 h-6 text-white" />,
        href: "/settings",
    },
    {
        name: "Cerrar sesión",
        icon: <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-white" />,
        href: "/login",
    },
];


export default function Sidebar() {
    return (
        <div className="h-screen bg-gray flex flex-col">
            <div className="flex px-8 py-8 flex-col items-center w-full">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-4 w-full mb-8">
                    <div className="flex items-center justify-center w-full">
                        <Image
                            src="/images/logotipo-base.svg"
                            alt="RataCueva Logo"
                            width={220}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="w-[234px] h-px bg-white"></div>
                </div>

                {/* Main Navigation */}
                <nav className="flex flex-col items-start w-full mb-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex px-4 py-4 items-center gap-4 w-full rounded-lg hover:bg-dark transition-all duration-200"
                        >
                            {item.icon}
                            <Body as="span" className="font-bold">{item.name}</Body>
                        </Link>
                    ))}
                </nav>

                <div className="w-[234px] h-px bg-white mb-8"></div>

                {/* Bottom Navigation */}
                <nav className="flex flex-col items-start w-full">
                    {bottomNavigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex px-4 py-4 items-center gap-4 w-full rounded-lg hover:bg-white/10 transition-all duration-200"
                        >
                            {item.icon}
                            <Body as="span" className="font-bold">{item.name}</Body>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}

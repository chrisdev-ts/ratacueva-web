// src/components/auth/AuthGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export const AuthGuard = ({ allowedRoles, children }: AuthGuardProps) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (allowedRoles.includes(user.role)) {
        setAuthorized(true);
      } else {
        router.replace("/login");
      }
    } else {
      router.replace("/login");
    }
    setLoading(false);
  }, [allowedRoles, router]);

  if (loading || !authorized) return null;

  return <>{children}</>;
};

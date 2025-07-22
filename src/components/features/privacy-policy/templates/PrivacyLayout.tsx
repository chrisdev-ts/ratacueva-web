"use client";

import React, { useState } from "react";
import { PrivacySidebar } from "@/components/features/privacy-policy/organisms/PrivacySidebar";
import { Body } from "@/components/atoms/Typography";
import { PageLayout, ContentLayout } from "@/components/templates";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PrivacyLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const PrivacyLayout: React.FC<PrivacyLayoutProps> = ({
  children,
  title,
  breadcrumbs,
}) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <PageLayout>
      <ContentLayout title={title} breadcrumbs={breadcrumbs}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <PrivacySidebar />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* Mobile sidebar overlay */}
          {isMobileSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => setIsMobileSidebarOpen(false)}
              />

              {/* Sidebar */}
              <div className="relative w-80 bg-dark h-full overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-6">
                  <Body className="font-bold">Navegación</Body>
                  <button
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="hover:text-success transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <PrivacySidebar />
              </div>
            </div>
          )}

          {/* Mobile sidebar toggle button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="bg-success text-black p-4 rounded-full shadow-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-dark"
              aria-label="Abrir navegación"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </ContentLayout>
    </PageLayout>
  );
};

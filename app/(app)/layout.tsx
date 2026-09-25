"use client"
import SidebarClient from "@/components/layout/sidebarClient";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-slate-200 h-screen overflow-hidden lg:p-20 w-full">
            <div className="bg-white flex h-full max-w-7xl mx-auto">

                <SidebarClient />

                <main className="h-full pt-20 md:pt-0 w-full">
                    {children}
                </main>

            </div>
        </div>
    );
}
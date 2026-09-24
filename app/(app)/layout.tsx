"use client"
import SidebarClient from "@/components/layout/sidebarClient";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#F6F6F6] h-screen overflow-hidden w-full">
            <div className="flex h-full max-w-7xl mx-auto">
                <SidebarClient />
                <div className=" h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
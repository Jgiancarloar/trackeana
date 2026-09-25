"use client"

import { Button } from "@/components/ui/button"
import {
    Box,
    Bell,
    ChartNoAxesCombined,
    ChevronDown,
    LayoutDashboard,
    MapPin,
    Wrench,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SidebarClient() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    return (
        <aside className="bg-white fixed left-0 right-0 top-0 z-50 md:static md:w-64">

            {/* HEADER */}
            <nav className="flex items-center justify-between p-5">

                {/* LOGO */}
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2"
                >
                    <div className="bg-black h-8 w-8 rounded-md p-1 text-white">
                        <Box className="h-full w-full" />
                    </div>

                    <h2 className="text-xl font-bold">
                        Trackeana
                    </h2>
                </Link>

                {/* MOBILE BUTTON */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={handleMenu}
                >
                    <ChevronDown
                        className={`transition-transform duration-300 ${
                            menuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>

            </nav>


            {/* MENU */}
            <nav
                className={`
                    overflow-hidden
                    border-t border-gray-100
                    px-5 pb-5
                    transition-all duration-300
                    md:block
                    md:border-0
                    md:p-5
                    md:pt-0
                    ${
                        menuOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                    }
                `}
            >

                <div className="space-y-2">

                    {/* DASHBOARD */}
                    <Button
                        render={<Link href="/dashboard" />}
                        className="
                            h-20
                            w-full
                            justify-center
                            gap-2
                            rounded-xl
                            bg-black
                            text-white
                            hover:bg-black/90
                        "
                    >
                        <LayoutDashboard className="h-5 w-5" />

                        <span>
                            Dashboard
                        </span>
                    </Button>


                    {/* GRID */}
                    <div className="grid grid-cols-2 gap-2">

                        {/* ACTIVOS */}
                        <Button
                            render={<Link href="/activos" />}
                            variant="outline"
                            className="
                                h-24
                                flex-col
                                gap-2
                                rounded-xl
                                border-gray-100
                                bg-white
                                text-gray-900
                                shadow-sm
                                hover:bg-[#F6F6F6]
                            "
                        >
                            <Box className="h-5 w-5" />

                            <span>
                                Activos
                            </span>
                        </Button>


                        {/* UBICACIONES */}
                        <Button
                            render={<Link href="/ubicaciones" />}
                            variant="outline"
                            className="
                                h-24
                                flex-col
                                gap-2
                                rounded-xl
                                border-gray-100
                                bg-white
                                text-gray-900
                                shadow-sm
                                hover:bg-[#F6F6F6]
                            "
                        >
                            <MapPin className="h-5 w-5" />

                            <span>
                                Ubicaciones
                            </span>
                        </Button>


                        {/* MANTENIMIENTOS */}
                        <Button
                            render={<Link href="/mantenimientos" />}
                            variant="outline"
                            className="
                                h-24
                                flex-col
                                gap-2
                                rounded-xl
                                border-gray-100
                                bg-white
                                text-gray-900
                                shadow-sm
                                hover:bg-[#F6F6F6]
                            "
                        >
                            <Wrench className="h-5 w-5" />

                            <span>
                                Mantenimientos
                            </span>
                        </Button>


                        {/* REPORTES */}
                        <Button
                            render={<Link href="/reportes" />}
                            variant="outline"
                            className="
                                h-24
                                flex-col
                                gap-2
                                rounded-xl
                                border-gray-100
                                bg-white
                                text-gray-900
                                shadow-sm
                                hover:bg-[#F6F6F6]
                            "
                        >
                            <ChartNoAxesCombined className="h-5 w-5" />

                            <span>
                                Reportes
                            </span>
                        </Button>

                    </div>


                    {/* NOTIFICACIONES */}
                    <Button
                        render={<Link href="/notificaciones" />}
                        variant="outline"
                        className="
                            h-14
                            w-full
                            justify-start
                            gap-3
                            rounded-xl
                            border-gray-100
                            bg-white
                            px-4
                            text-gray-900
                            shadow-sm
                            hover:bg-[#F6F6F6]
                        "
                    >
                        <Bell className="h-5 w-5" />

                        <span>
                            Notificaciones
                        </span>
                    </Button>

                </div>

            </nav>

        </aside>
    )
}
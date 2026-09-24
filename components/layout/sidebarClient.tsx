"use client"
import { ChevronsDown } from 'lucide-react';
import { useState } from 'react';

export default function SidebarClient() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    //[#F6F6F6]

    return (
        <aside className="fixed bg-red-100 left-0 right-0 md:static top-0 w-full md:w-64">
            <nav className="flex items-center justify-between p-5">
                <h2>Trackeanaa</h2>
                <button onClick={handleMenu}>
                    <ChevronsDown />
                </button>
            </nav>
            <nav className={menuOpen ? "block" : "hidden"}>
                nav
            </nav>
        </aside>
    );
}
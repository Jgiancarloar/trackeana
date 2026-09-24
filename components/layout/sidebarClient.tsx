"use client"
import { ChevronsDown } from 'lucide-react';
import { useState } from 'react';

export default function SidebarClient() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    //[#F6F6F6]

    return (
        <aside className="fixed bg-red-500/20 p-5 w-full">
            <div className='flex items-center justify-between w-full'>
                <h2 className='font-bold text-xl'>
                    Trackeana
                </h2>
                <button 
                className={`${menuOpen ? 'rotate-180' : ''} transition-transform duration-300`}
                onClick={handleMenu} 
                >
                    <ChevronsDown strokeWidth={2} />
                </button>
            </div>
        </aside>
    );
}
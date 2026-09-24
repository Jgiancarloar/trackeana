import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="p-5">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <p className="font-black text-2xl">Trackeana</p>
                <Button
                    className="h-11 px-4 text-base"
                    render={<Link href="/login" />}
                    size="lg"
                >
                    Iniciar Sesión
                </Button>
            </div>
        </nav>
    );
}
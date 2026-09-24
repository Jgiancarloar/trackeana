import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav>
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <h1>Trackeana</h1>
                <Button render={<Link href="/login" />}>
                    <Link href="/login">Iniciar Sesión</Link>
                </Button>
            </div>
        </nav>
    );
}
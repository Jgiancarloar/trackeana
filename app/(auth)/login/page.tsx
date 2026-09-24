import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="flex h-screen items-center justify-center p-5">
            <div className="flex flex-col gap-5 w-full">
                <h2 className="font-bold text-center text-3xl">Trackeana</h2>
                <h2 className="font-semibold text-center text-xl">Iniciar Sesión</h2>
                <input
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="Email"
                    type="email"
                />
                <input
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="Contraseña"
                    type="password"
                />
                <Button
                    className="font-semibold h-12"
                    render={<Link href="/dashboard" />}
                    size="lg"
                >
                    Ingresar
                </Button>
            </div>
        </div>
    );
}
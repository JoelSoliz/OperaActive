import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full h-screen">
        <div className="absolute bg-[rgba(255,255,255,0.9)] rounded-xl flex flex-col w-full items-center text-black pt-24">
          <h1 className="text-4xl  font-bold">¡Bienvenido a OperaActive!</h1>
          <span className="text-2xl  font-bold">¿Interesado en Colaborar?</span>
        </div>
        <Image
          className="-z-10 object-contain"
          alt="Icon"
          src="/team.jpg"
          fill
          sizes="100vw"
        />
        <div className="absolute flex flex-col w-full items-center text-blue-50 pb-12 bottom-0">
          <Link
            href="#objetivos"
            className="text-2xl font-bold bg-blue-800 rounded-xl py-4 px-6"
          >
            CUENTAME MÁS
          </Link>
        </div>
      </div>
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Objectives from "@/pageSections/home/Objectives";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full h-screen">
        <div className="absolute bg-[rgba(255,255,255,0.9)] rounded-xl flex flex-col w-full items-center text-black pt-24">
          <h1 className="text-4xl font-serif font-bold">
            ¡Bienvenido a{" "}
            <span className="font-['Dancing_Script',cursive] text-[#ff0011]">
              Opera Active
            </span>
            !
          </h1>
          <span className="text-2xl font-serif font-bold">
            ¿Interesado en Colaborar?
          </span>
        </div>
        <Image
          className="-z-10 object-contain px-4"
          alt="Icon"
          src="/assets/team.png"
          fill
          sizes="100vw"
        />
        <div className="absolute flex flex-col w-full items-center text-[#fefdff] pb-12 bottom-0">
          <Link
            href="#objetivos"
            className="text-2xl font-serif font-bold bg-[#8777c2] rounded-xl py-4 px-6"
            scroll={false}
          >
            CUENTAME MÁS
          </Link>
        </div>
      </div>
      <Objectives />
    </main>
  );
}

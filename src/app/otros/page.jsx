"use client";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useState } from "react";

export default function Movimientos() {
  var arrays;
  const post = 0;

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div>
        <Navbar />
        <div className="grid place-items-center">
          <p className="text-2xl place-items-center">Otros - Hub</p>
        </div>
        <div className="grid grid-cols-2 place-items-center m-4 p-6 px-64 border-2 border-pink-200">
          <div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <p className="grid place-items-center">
                <Link href="/movimientos/ajustes">Ajustes</Link>
              </p>
            </div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <p className="grid place-items-center">
                <Link href="/movimientos/ayuda">Ayuda</Link>
              </p>
            </div>
          </div>
          <div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <p className="grid place-items-center">
                <Link href="/movimientos/sobre">Sobre</Link>
              </p>
            </div>

            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <p className="grid place-items-center">
                <Link href="/movimientos/administrador">Administrador</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client'
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
        <Navbar/>

        

        <div className="flex m-4 p-6 border-2 border-pink-200">
          <div className="flex-col m-4 p-6 border-2 border-pink-200">
            <div className="m-4 p-6 border-2 border-pink-200">
              <p>
                <Link href="/movimientos/abonos">Ventas</Link>
              </p>
            </div>

            {/*arrays.map((post) => (
              <div key={(post.id)} className="m-4 p-6 border-2 border-pink-200">
                <p>as</p>
              </div>
            ))*/}

            <div className="m-4 p-6 border-2 border-pink-200">
              <p>as</p>
            </div>
          </div>

          <div>
            <div className="m-4 p-6 border-2 border-pink-200">
              <p>
                <Link href="/movimientos/otrosmov">Cobros</Link>
              </p>
            </div>

            <div className="m-4 p-6 border-2 border-pink-200">
              <p>
                <Link href="/movimientos/otrosmov">Editar</Link>
              </p>
            </div>

            <div className="m-4 p-6 border-2 border-pink-200">
              <p>
                <Link href="/movimientos/otrosmov">OtrosMov</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

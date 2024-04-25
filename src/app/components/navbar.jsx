"use client";
import Link from "next/link";
import { useState } from "react";

export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHovered1, setIsHovered1] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHovered2, setIsHovered2] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHovered3, setIsHovered3] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="flex gap-6 bg-slate-00">
      <div
        className="flex-1 p-4 m-4 items-center justify-center border-2 border-emerald-900 bg-emerald-950"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <p key={"/tablas"} className="grid place-items-center">
          <Link href="/tablas">Tablas</Link>
        </p>
        <div className={`group ${isHovered1 ? "contents " : "hidden"}`}>
          <div className="">
            <li key={"/tablas/grupos"}>
              <Link href="/tablas/grupos">Grupos</Link>
            </li>
            <li key={"/tablas/zonas"}>
              <Link href="/tablas/zonas">Zonas</Link>
            </li>
            <li key={"/tablas/productos"}>
              <Link href="/tablas/productos">Productos</Link>
            </li>
            <li key={"/tablas/paquetes"}>
              <Link href="/tablas/paquetes">Paquetes</Link>
            </li>
            <li key={"/tablas/cobradores"}>
              <Link href="/tablas/cobradores">Cobradores</Link>
            </li>
          </div>
        </div>
      </div>

      <div
        className="flex-1 p-4 m-4 border-2 border-emerald-900 bg-emerald-950"
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <p key={"/movimientos"} className="grid place-items-center">
          <Link href="/movimientos">Movimientos</Link>
        </p>
        <div className={`group ${isHovered4 ? "contents " : "hidden"}`}>
          <div className="">
            <li key={"/movimientos/altas"}>
              <Link href="/movimientos//altas">Altas</Link>
            </li>
            <li key={"/movimientos/abonos"}>
              <Link href="/movimientos/abonos">Abonos</Link>
            </li>
            <li key={"/movimientos/modificaciones"}>
              <Link href="/movimientos/modificaciones">Modificaciones</Link>
            </li>
            
            <li key={"/movimientos/otrosmov"}>
              <Link href="/movimientos/otrosmov">Otrosmov</Link>
            </li>
            
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 m-4 border-2 border-emerald-900 bg-emerald-950 place-items-center">
        <p key={"/hub"} className="grid place-items-center">
          <Link href="/hub">Inicio</Link>
        </p>
      </div>

      <div
        className="flex-1 p-4 m-4 border-2 border-emerald-900 bg-emerald-950"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <p key={"/reportes"} className="grid place-items-center">
          <Link href="/reportes">Reportes</Link>
        </p>
        <div className={`group ${isHovered2 ? "contents " : "hidden"}`}>
          <div className="">
            <li key={"/reportes/estadisticas"}>
              <Link href="/reportes/estadisticas">Estadisticas</Link>
            </li>
            {/* 
            <li key={"/reportes/mapa"}>
              <Link href="/reportes/mapa">Mapa</Link>
            </li>
            <li key={"/reportes/otrosrep1"}>
              <Link href="/reportes/otrosrep1">Otrosrep1</Link>
            </li>
            <li key={"/reportes/otrosrep2"}>
              <Link href="/reportes/otrosrep2">Otrosrep2</Link>
            </li>
            */}
          </div>
        </div>
      </div>

      <div
        className="flex-1 p-4 m-4 border-2 border-emerald-900 bg-emerald-950"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <p key={"/otros"} className="grid place-items-center">
          <Link href="/otros">Otros</Link>
        </p>
        <div className={`group ${isHovered3 ? "contents " : "hidden"}`}>
          <div className="">
            {/* 
            <li key={"otros/administrador"}>
              <Link href="otros/administrador">Administrador</Link>
            </li>
            <li key={"otros/ajustes"}>
              <Link href="otros/ajustes">Ajustes</Link>
            </li>
            <li key={"otros/ayuda"}>
              <Link href="otros/ayuda">Ayuda</Link>
            </li>
            */}
            <li key={"otros/sobre"}>
              <Link href="otros/sobre">Sobre</Link>
            </li>
            
          </div>
        </div>
      </div>
    </div>
  );
}

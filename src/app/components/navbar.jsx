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
        className="flex-1 p-4 m-4 border-2 border-slate-200"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <p key={"/tablas"}>
          <Link href="/tablas">Tablas</Link>
        </p>
        <div className={`group ${isHovered1 ? "contents " : "hidden"}`}>
          <div className="p-4 m-4 border border-slate-200">
            <p key={"/tablas/grupos"}>
              <Link href="/tablas/grupos">Grupos</Link>
            </p>
            <p key={"/tablas/zonas"}>
              <Link href="/tablas/zonas">Zonas</Link>
            </p>
            <p key={"/tablas/productos"}>
              <Link href="/tablas/productos">Productos</Link>
            </p>
            <p key={"/tablas/paquetes"}>
              <Link href="/tablas/paquetes">Paquetes</Link>
            </p>
            <p key={"/tablas/cobradores"}>
              <Link href="/tablas/cobradores">Cobradores</Link>
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex-1 p-4 m-4 border-2 border-slate-200"
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <p key={"/movimientos"}>
          <Link href="/movimientos">Movimientos</Link>
        </p>
        <div className={`group ${isHovered4 ? "contents " : "hidden"}`}>
          <div className="p-4 m-4 border border-slate-200">
            <p key={"/movimientos/altas"}>
              <Link href="/movimientos//altas">Altas</Link>
            </p>
            <p key={"/movimientos/abonos"}>
              <Link href="/movimientos/abonos">Abonos</Link>
            </p>
            <p key={"/movimientos/modificaciones"}>
              <Link href="/movimientos/modificaciones">Modificaciones</Link>
            </p>
            <p key={"/movimientos/otrosmov"}>
              <Link href="/movimientos/otrosmov">Otrosmov</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 m-4 border-2 border-slate-200 place-items-center">
        <p key={"/hub"}>
          <Link href="/hub">Inicio</Link>
        </p>
      </div>

      <div
        className="flex-1 p-4 m-4 border-2 border-slate-200"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <p key={"/reportes"}>
          <Link href="/reportes">Reportes</Link>
        </p>
        <div className={`group ${isHovered2 ? "contents " : "hidden"}`}>
          <div className="p-4 m-4 border border-slate-200">
            <p key={"/reportes/estadisticas"}>
              <Link href="/reportes/estadisticas">Estadisticas</Link>
            </p>
            <p key={"/reportes/mapa"}>
              <Link href="/reportes/mapa">Mapa</Link>
            </p>
            <p key={"/reportes/otrosrep1"}>
              <Link href="/reportes/otrosrep1">Otrosrep1</Link>
            </p>
            <p key={"/reportes/otrosrep2"}>
              <Link href="/reportes/otrosrep2">Otrosrep2</Link>
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex-1 p-4 m-4 border-2 border-slate-200"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <p key={"/otros"}>
          <Link href="/otros">Otros</Link>
        </p>
        <div className={`group ${isHovered3 ? "contents " : "hidden"}`}>
          <div className="p-4 m-4 border border-slate-200">
            <p key={"otros/administrador"}>
              <Link href="otros/administrador">Administrador</Link>
            </p>
            <p key={"otros/ajustes"}>
              <Link href="otros/ajustes">Ajustes</Link>
            </p>
            <p key={"otros/ayuda"}>
              <Link href="otros/ayuda">Ayuda</Link>
            </p>
            <p key={"otros/sobre"}>
              <Link href="otros/sobre">Sobre</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

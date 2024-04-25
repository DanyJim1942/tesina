import navbar from "../components/navbar";
import Link from "next/link";


function fecha(){
  const fecha = new Date();
  return fecha;
}

export default function homehub() {
  return (
    <>
      <div className="p-4 ">
        <div className="flex-row ">
          <div className="flex gap-12 p-4  border-4 border-emerald-900 bg-emerald-950">
            <p className="text-xl flex-1">Promociones Aguasclientes</p>
            <img className="flex-1" src="" alt="" />
            <p className="flex-1">as{}</p>
          </div>
          <div className="grid place-items-center m-2"> 
              <p className="text-2xl">
                Seleccione una opcion
              </p> 
          </div>
        </div>
        <div className="flex-column mx-48">
          <div className="flex">
            <div className="flex-1 p-8 m-4 border-4 border-emerald-900 bg-emerald-950">
              <p key={"/tablas"}>
                <Link className="text-2xl" href="/tablas">
                  Tablas
                </Link>
              </p>
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

            <div className="flex-1 p-8 m-4 border-4 border-emerald-900 bg-emerald-950">
              <p key={"/movimientos"}>
                <Link className="text-2xl" href="/movimientos">
                  Movimientos
                </Link>
              </p>

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
          <div className="flex">
            <div className="flex-1 p-8 m-4 border-4 border-emerald-900 bg-emerald-950">
              <p key={"/reportes"}>
                <Link className="text-2xl" href="/reportes">
                  Reportes
                </Link>
              </p>
              <li key={"/reportes/estadisticas"}>
                <Link href="/reportes/estadisticas">Estadisticas</Link>
              </li>
              <li key={"/reportes/mapa"}>
                <Link href="/reportes/mapa">Mapa</Link>
              </li>
              <li key={"/reportes/otrosrep1"}>
                <Link href="/reportes/otrosrep1">Otrosrep1</Link>
              </li>
              <li key={"/reportes/otrosrep2"}>
                <Link href="/reportes/otrosrep2">Otrosrep2</Link>
              </li>
            </div>

            <div className="flex-1 p-8 m-4 border-4 border-emerald-900 bg-emerald-950">
              <p key={"/otros"}>
                <Link className="text-2xl" href="/otros">
                  Otros
                </Link>
              </p>
              <li key={"otros/administrador"}>
                <Link href="otros/administrador">Administrador</Link>
              </li>
              <li key={"otros/ajustes"}>
                <Link href="otros/ajustes">Ajustes</Link>
              </li>
              <li key={"otros/ayuda"}>
                <Link href="otros/ayuda">Ayuda</Link>
              </li>
              <li key={"otros/sobre"}>
                <Link href="otros/sobre">Sobre</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

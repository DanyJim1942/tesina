import navbar from "../../components/navbar";
import Link from "next/link";

export default function homehub() {
  return (
    <>
      <div className="m-4 p-4 border-2 border-slate-500">
        <div>
          <h1>Promociones Aguasclientes</h1>

          <h3>Seleccione una opcion</h3>
        </div>
        <div className="flex p-4 m-4 border-2 border-slate-200">
          <div className="p-4 m-4 border-2 border-slate-200">
            <p key={"/tablas"}>
              <Link href="/tablas">Tablas</Link>
            </p>
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

          <div className="p-4 m-4 border-2 border-slate-200">
            <p key={"/movimientos"}>
              <Link href="/movimientos">Movimientos</Link>
            </p>

            <p key={"/movimientos/altas"}>
              <Link href="/movimientos/altas">Altas</Link>
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

          <div className="p-4 m-4 border-2 border-slate-200">
            <p key={"/reportes"}>
              <Link href="/reportes">Reportes</Link>
            </p>
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

          <div className="p-4 m-4 border-2 border-slate-200">
            <p key={"/otros"}>
              <Link href="/otros">Otros</Link>
            </p>
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
    </>
  );
}

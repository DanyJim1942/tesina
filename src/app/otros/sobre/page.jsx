import Navbar from "../../components/navbar";
import Link from "next/link";

export default function homehub() {
  return (
    <>
      <Navbar></Navbar>
      <div className="m-4 p-4 border-2 border-slate-500">
        <div>
          <h1>Promociones Aguasclientes</h1>

          <h3>Agradecemos su eleccion, las actualizaciones seran constantes</h3>
          <h4>Dany Jimenez Velazquez</h4>
          <h4>Jonathan Ochoa Vicuña</h4>
          <h4>Gabriel el gabo</h4>
        </div>
      </div>
    </>
  );
}

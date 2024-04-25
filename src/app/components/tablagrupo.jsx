"use client";
import Venta from "../utils/modelos/venta";
import connectDB from "../libs/mogod";
import Navbar from "./navbar";

async function getVentas() {
    console.log("-1");
  await connectDB();
  console.log("-2");
  const ventas = await Venta.find();
  console.log("-3"+ventas);
  return ventas;
}
export default async function Grupos() {
    console.log("-0");
  const ventas = await getVentas();
  console.log("-4");
  return (
    <>
    <Navbar></Navbar>
    <div className="p-6 m-4 mx-60 border-4 border-emerald-900 bg-emerald-950 grid place-items-center">
      <table>
        <tr>
          <th className="border-2 border-emerald-600 m-2 p-4">Vendedor</th>
          <th className="border-2 border-emerald-600 m-2 p-4">Precio</th>
          <th className="border-2 border-emerald-600 m-2 p-4">Enganche</th>
          <th className="border-2 border-emerald-600 m-2 p-4">Producto 1</th>
          <th className="border-2 border-emerald-600 m-2 p-4">Abono 3</th>
          <th className="border-2 border-emerald-600 m-2 p-4">Boton</th>
        </tr>
        {ventas.map((venta) => (
          <tr key={venta.id}>
            <td className="border border-emerald-400 m-2 p-4">{venta.vendedor}</td>
            <td className="border border-emerald-400 m-2 p-4">{venta.precio}</td>
            <td className="border border-emerald-400 m-2 p-4">{venta.enganche}</td>
            <td className="border border-emerald-400 m-2 p-4">{venta.producto1}</td>
            <td className="border border-emerald-400 m-2 p-4">{venta.abono3}</td>
            <td className="border border-emerald-400 m-2 p-4">{1 + 1}</td>
          </tr>
        ))}
      </table>
      </div>
    </>
  );
}

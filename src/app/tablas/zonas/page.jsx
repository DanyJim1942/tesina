"use client";
import Link from "next/link";
import Venta from "../../utils/modelos/venta";
import connectDB from "@/app/libs/mogod";
import Navbar from "../../components/navbar";

const getTopics = async () => {
  await connectDB();
  const ventas = await Venta.find();
  return ventas;
};

export default async function Zonas() {
  const ventas = await getTopics();

  return (
    <>
      <Navbar></Navbar>
      <div className="p-6 m-4 mx-60 border-4 border-emerald-900 bg-emerald-950 grid place-items-center">
        <table>
          <tr>
            <th className="border-2 border-emerald-600 m-2 p-4">Estado</th>
            <th className="border-2 border-emerald-600 m-2 p-4">Municipio</th>
            <th className="border-2 border-emerald-600 m-2 p-4">Poblacion</th>
            <th className="border-2 border-emerald-600 m-2 p-4">Precio</th>
            <th className="border-2 border-emerald-600 m-2 p-4">F. Venta</th>
            <th className="border-2 border-emerald-600 m-2 p-4">Boton</th>
          </tr>
          {ventas.map((venta) => (
            <tr key={venta.producto1}>
              <td className="border border-emerald-400 m-2 p-4">
                {venta.estado}
              </td>
              <td className="border border-emerald-400 m-2 p-4">
                {venta.municipio}
              </td>
              <td className="border border-emerald-400 m-2 p-4">
                {venta.poblacion}
              </td>
              <td className="border border-emerald-400 m-2 p-4">
                {venta.precio}
              </td>
              <td className="border border-emerald-400 m-2 p-4">
                {venta.fechaventa}
              </td>
              <td className="border border-emerald-400 m-2 p-4">{1 + 1}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import Venta from "../utils/modelos/venta";
import connectDB from "@/app/libs/mogod";

const getTopics = async () => {
  await connectDB();
  const ventas = await Venta.find();
  return ventas;
};

export default async function Cuentas() {
  const ventas = await getTopics();

  return (
    <>
      <table>
        <tr>
          <th className="border-2 border-pink-300 m-2 p-4">Numero</th>
          <th className="border-2 border-pink-300 m-2 p-4">Cobrador</th>
          <th className="border-2 border-pink-300 m-2 p-4">Precio</th>
          <th className="border-2 border-pink-300 m-2 p-4">Enganche</th>
          <th className="border-2 border-pink-300 m-2 p-4">F. Venta</th> 
          <th className="border-2 border-pink-300 m-2 p-4">Boton</th>
        </tr>
        {ventas.map((venta) => (
          <tr key={venta.id}>
            <td>{venta.cuenta}</td>
            <td>{venta.cobrador}</td>
            <td>{venta.precio}</td>
            <td>{venta.enganche}</td>
            <td>{venta.fechaventa}</td>
            <td>{1+1}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

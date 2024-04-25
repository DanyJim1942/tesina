"use client";
import Navbar from "../../components/navbar";
import Link from "next/link";
import Venta from "../../utils/modelos/venta";
import connectDB from "@/app/libs/mogod";
import { useState } from "react";

const getTopics = async () => {
  await connectDB();
  const ventas = await Venta.find();
  return ventas;
};

export default async function Reportes() {
  const ventas = await getTopics();
  var aux = 0;
  var eprecio = 0;
  var ediferencia = 0;
  var eenganche = 0;
  var eabono1 = 0;
  var eabono2 = 0;
  var eabono3 = 0;
  var edinero = 0;
  const ecuenta = ventas.length;
  for (let i = 0; i < ecuenta; i++) {
    eprecio =eprecio+parseInt(ventas[i].precio);
    eenganche =eenganche+parseInt(ventas[i].enganche);
    eabono1 =eabono1+parseInt(ventas[i].abono1);
    eabono2 =eabono2+parseInt(ventas[i].abono2);
    eabono3 =eabono3+parseInt(ventas[i].abono3);
     
  } 
  edinero = eenganche + eabono1 + eabono2 + eabono3;
  ediferencia = eprecio - edinero;

  return (
    <>
      <div>
        <Navbar />
        <div className="grid place-items-center">
          <p className="text-2xl place-items-center">Estadisticas</p>
        </div>
        <div className="grid grid-cols-4 place-items-center m-4 p-6 px-64 ">
          <div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Precio: {eprecio}</p>
              </div>
            </div>

            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Dinero: {edinero}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>
                  Diferencia: 
                  {ediferencia}
                </p>
              </div>
            </div>

            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Cuentas: {ecuenta}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Enganches: {eenganche}</p>
              </div>
            </div>

            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Abonos 1: {eabono1}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Abonos 2: {eabono2}</p>
              </div>
            </div>

            <div className="m-4 p-6 border-4 border-emerald-900 bg-emerald-950">
              <div className="grid place-items-center">
                <p>Abonos 3: {eabono3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

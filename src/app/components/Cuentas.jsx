"use client";
import Link from "next/link";

const getTopics = async () => {
  console.log("abismo");
  try {
    console.log("infierno");
    const res = await fetch("http://localhost:3000/api/ruta3", {
      method: "GET",
      cache: "no-store",
    });
    console.log("auuuu" + res[0]);
    if (!res.ok) {
      throw new Error("Error al recibir ventas");
    }else{
        return res.json();
    }

    
  } catch (error) {
    console.log("Error papi nooooo", error);
  }
};

export default async function Cuentas() {
  var  ventas  = await getTopics();
  
  return (
    <>
      {ventas.map((l) => (
        <div key={l.id}>
          <p>l</p>
        </div>
      ))}
      <div></div>
    </>
  );
}

"use client";

import Link from "next/link";
import Navbar from "../../components/navbar";
import { useState } from "react";

export default  function Modificaciones() {
  const [dato, setDato] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("../../api/ruta3/"+dato, {
      method: "DELETE",
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="p-8 m-2 mx-64 border-4 border-emerald-900 bg-emerald-950 grid place-items-center">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-12">
          <h1>Eliminar cuenta</h1>
          <p className="text-2xl">Numero de cuenta: </p>
          <input
            onChange={(e) => setDato(e.target.value)}
            value={dato}
            type="text"
            id="dato"
            className="bg-slate-500"
            placeholder="Cuenta"
          />
          <button
          className="bg-emerald-700 mx-40  p-3 text-white font-bold "
          type="submit"
        >
          Eliminar
        </button>
        </form>
      </div>
    </>
  );
}

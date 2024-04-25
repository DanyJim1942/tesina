"use client";

import Link from "next/link";
import Navbar from "../../components/navbar";
import { useState } from "react";

export default  function Abonos() {
  const [dato, setDato] = useState("");
  const handleSubmit = async (e) => {
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="p-8 m-2 mx-64 border-4 border-emerald-900 bg-emerald-950 grid place-items-center">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-12">
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
          <Link href={"/movimientos/abonos/"+dato}>Buscar</Link>
        </button>
        </form>
      </div>
    </>
  );
}

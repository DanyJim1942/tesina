"use client";

import { useState } from "react";

export default function Usuario() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", usuairo);
    console.log("Message: ", clave);


    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setUsuario(""); 
      setClave("");
    }
  };

  return (
    <>
      <div className="px-72 py-16" >
        <form
          onSubmit={handleSubmit}
          className="mx-36 py-16 px-16 border-4 border-emerald-900 bg-emerald-950 flex flex-col gap-5"
        >
          <div className="place-items-center my-4">
            <img></img>
            <p className="text-4xl">Acceso</p>
          </div>
          <div>
            <label htmlFor="usuario">Usuario</label>
            <input
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
              type="text"
              id="usuario"
              placeholder="Usuario"
              className="text-black"
            />
          </div>
 

          <div>
            <label htmlFor="clave">Clave de acceso</label>
            <input
              onChange={(e) => setClave(e.target.value)}
              value={clave}
              className="text-black"
              id="clave"
              placeholder="Clave de acceso"
            ></input>
          </div>

          <button
            className="bg-emerald-700 mx-20 mt-8  p-3 text-white font-bold"
            type="submit"

          >
            Iniciar sesion
          </button>
        </form>

      </div>
    </>
  );
}

"use client";

import { useState } from "react";

export default function Mierda() {
  //variables o elementos de la venta comun.
  const [cuenta, cuentaset] = useState("");
  const [producto1, producto1set] = useState("");
  const [producto2, producto2set] = useState("");
  const [producto3, producto3set] = useState("");
  const [precio, precioset] = useState("");
  const [enganche, engancheset] = useState("");
  const [abono1, abono1set] = useState("");
  const [abono2, abono2set] = useState("");
  const [abono3, abono3set] = useState("");
  const [fechaventa, fechaventaset] = useState("");
  const [fechacobro1, fechacobro1set] = useState("");
  const [fechacobro2, fechacobro2set] = useState("");
  const [vendedor, vendedorset] = useState("");
  const [cobrador, cobradorset] = useState("");
  const [estado, estadoset] = useState("");
  const [nombre, nombreset] = useState("");
  const [telefono, telefonoset] = useState("");
  const [refnombre, refnombreset] = useState("");
  const [refdomicilio, refdomicilioset] = useState("");
  const [reftelefono, reftelefonoset] = useState("");
  const [refparentesco, refparentescoset] = useState("");
  const [municipio, municipioset] = useState("");
  const [poblacion, poblacionset] = useState("");
  const [detpoblacion, detpoblacionset] = useState("");
  //manejador de errores y de exitos.
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(cuenta);
    console.log(producto1);
    console.log(producto2);
    console.log(producto3);
    console.log(precio);
    console.log(enganche);
    console.log(abono1);
    console.log(abono2);
    console.log(abono3);
    console.log(fechaventa);
    console.log(fechacobro1);
    console.log(fechacobro2);
    console.log(vendedor);
    console.log(cobrador);
    console.log(estado);
    console.log(nombre);
    console.log(telefono);
    console.log(refnombre);
    console.log(refdomicilio);
    console.log(reftelefono);
    console.log(refparentesco);
    console.log(municipio);
    console.log(poblacion);

    const res = await fetch("../utils/rutas2", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        cuenta,
        producto1,
        producto2,
        producto3,
        precio,
        enganche,
        abono1,
        abono2,
        abono3,
        fechaventa,
        fechacobro1,
        fechacobro2,
        vendedor,
        cobrador,
        estado,
        nombre,
        telefono,
        refnombre,
        refdomicilio,
        reftelefono,
        refparentesco,
        municipio,
        poblacion,
        detpoblacion,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      console.log("eaea");
    }
  };

  return (
    <div>
      <div id="altaswrapper" className="grid grid-cols-1 place-items-center">
        {/*DIV - NAVIGACION VAR*/}
        <div id="altasnavbar" className="place-items-center"></div>
        {/* DIV CONTENEDOR 0 */}
        <div id="altascontenedor0" className="p-2 m-2 border-4 border-emerald-900 bg-emerald-950 flex ">
          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className=" flex flex-col">
            {/* DIV - CONTENEDOR 1 */}
            <div id="altascontendor1" className="flex flex-row gap-8 m-10">
              <br />
              {/* DIV - ICONO */}
              <div id="altasicono" className="m-2 flex-1 items-center justify-center">
                <label htmlFor="">icono</label>
              </div>
              {/* DIV - ASIGNACION FECHAS */}
              <div id="altasfechas" className="m-2 flex-1 items-center justify-center">
                {/* DIV - FECHA VENTA - DATO*/}
                <div>
                  <label htmlFor="">FECHA VENTA | D: - D:</label>
                  <input
                    onChange={(e) => fechaventaset(e.target.value)}
                    value={fechaventa}
                    type="text"
                    id="cuenta"
                    className="bg-slate-500"
                    placeholder="FECHA VENTA"
                  />
                </div>
                {/* DIV -FECHACOBRO - DATO */}
                <div>
                  <label htmlFor="">FECHA COBRO | D: - D:</label>
                  <input
                    onChange={(e) => fechacobro1set(e.target.value)}
                    value={fechacobro1}
                    type="text"
                    id="cuenta"
                    className="bg-slate-500"
                    placeholder="FECHA COBRO"
                  />
                </div>
              </div>
              {/* DIV - NUMERO DE CUENTA - DATO */}
              <div id="altascuenta" className="m-2  flex-1 items-center justify-center">
                <label htmlFor="cuenta">Cuenta: </label>
                <input
                  onChange={(e) => cuentaset(e.target.value)}
                  value={cuenta}
                  type="text"
                  id="cuenta"
                  className="bg-slate-500"
                  placeholder="CUENTA"
                />
              </div>
            </div>
            {/* DIV - CONTENEDOR 2 */}
            <div id="altascontenedor2" className="flex flex-row gap-8 m-10">
              {/* DIV - ALTA ARTICULOS */}
              <div id="altasarticulos">
                {/* DIV PRODUCTO 1 - DATO */}
                <div>
                  <label htmlFor="producto1">Producto 1 </label>
                  <input
                    onChange={(e) => producto1set(e.target.value)}
                    value={producto1}
                    type="text"
                    id="producto1"
                    placeholder="PRODUCTO 1"
                    className="bg-slate-500"
                  />
                </div>

                {/* DIV PRODUCTO 2 - DATO */}
                <div>
                  <label htmlFor="producto2">Producto 2 </label>
                  <input
                    onChange={(e) => producto2set(e.target.value)}
                    value={producto2}
                    type="text"
                    id="producto2"
                    placeholder="PRODUCTO 2"
                    className="bg-slate-500"
                  />
                </div>

                {/* DIV PRODUCTO 3 - DATO */}
                <div>
                  <label htmlFor="producto3">Producto 3 </label>
                  <input
                    onChange={(e) => producto3set(e.target.value)}
                    value={producto3}
                    type="text"
                    id="producto3"
                    placeholder="PRODUCTO 3"
                    className="bg-slate-500"
                  />
                </div>
              </div>

              {/* DIV ALTASDATOS*/}
              <div id="altasdatos">
                {/*DIV - VENDEDOR - DATO */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="vendedor">Vendedor</label>
                  <input
                    onChange={(e) => vendedorset(e.target.value)}
                    value={vendedor}
                    type="text"
                    id="vendedor"
                    placeholder="VENDEDOR"
                    className="bg-slate-500"
                  />
                </div>
                {/*DIV - COBRADOR - DATO */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Cobrador</label>
                  <input
                    onChange={(e) => cobradorset(e.target.value)}
                    value={cobrador}
                    type="text"
                    id="cobrador"
                    placeholder="COBRADOR"
                    className="bg-slate-500"
                  />
                </div>
                {/*DIV - CONTADO - CHECKBOX */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Contado</label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
              {/*DIV -  ALTASPAGOS*/}
              <div id="altaspagos">
                {/*DIV - PRECIO -DATO  */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Precio</label>
                  <input
                    onChange={(e) => precioset(e.target.value)}
                    value={precio}
                    type="text"
                    id="precio"
                    placeholder="PRECIO"
                    className="bg-slate-500"
                  />
                </div>
                {/*DIV - ENGANCHE - DATO */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Enganche</label>
                  <input
                    onChange={(e) => engancheset(e.target.value)}
                    value={enganche}
                    type="text"
                    id="enganche"
                    placeholder="ENGANCHE"
                    className="bg-slate-500"
                  />
                </div>
                {/*DIV - SALDO - LABEL */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Saldo</label>
                </div>
              </div>
            </div>
            {/*DIV - CONTENEDOR3 */}
            <div id="contenedor3" className="flex  flex-col m-10">
              {/*DIV - ALTASPERSONA */}
              <div id="altaspersona" className="flex gap-8">
                {/*DIV - NOMBRE -DATO */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Nombre</label>
                  <input
                    onChange={(e) => nombreset(e.target.value)}
                    value={nombre}
                    type="text"
                    id="nombre"
                    placeholder="NOMBRE"
                    className="bg-slate-500"
                  />
                </div>
                {/*DIV - TELEFONO - DATO */}
                <div className="m-2 gap-2 flex">
                  <label htmlFor="">Telefono</label>
                  <input
                    onChange={(e) => telefonoset(e.target.value)}
                    value={telefono}
                    type="text"
                    id="telefono"
                    placeholder="TELEFONO"
                    className="bg-slate-500"
                  />
                </div>
              </div>
              {/*DIV - ALTASUBICACION */}
              <div id="altasubicacion" className="flex gap-8">
                <div>
                  {/*DIV - ESTADO - DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Estado</label>
                    <input
                      onChange={(e) => estadoset(e.target.value)}
                      value={estado}
                      type="text"
                      id="cuenta"
                      className="bg-slate-500"
                      placeholder="Estado"
                    />
                  </div>
                  {/*DIV -  MUNICIPIO - DATO*/}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Municipio</label>
                    <input
                      onChange={(e) => municipioset(e.target.value)}
                      value={municipio}
                      type="text"
                      id="cuenta"
                      className="bg-slate-500"
                      placeholder="Municipio"
                    />
                  </div>
                  {/*DIV - POBLACION - DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Poblacion</label>
                    <input
                      onChange={(e) => poblacionset(e.target.value)}
                      value={poblacion}
                      type="text"
                      id="poblacion"
                      placeholder="POBLACION"
                      className="bg-slate-500"
                    />
                  </div>
                  {/*DIV - EXTRA - DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Extra</label>
                    <input
                      onChange={(e) => detpoblacionset(e.target.value)}
                      value={detpoblacion}
                      type="text"
                      id="detpoblacion"
                      placeholder="INFORMACION ADICIONAL"
                      className="bg-slate-500"
                    />
                  </div>
                </div>
                {/*DIV - ALTASREFERENCIA */}
                <div id="altasreferencia">
                  {/*DIV - NOMBREREF -DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Nombre</label>
                    <input
                      onChange={(e) => refnombreset(e.target.value)}
                      value={refnombre}
                      type="text"
                      id="refnombre"
                      placeholder="NOMBRE"
                      className="bg-slate-500"
                    />
                  </div>
                  {/*DIV - PARENTESCOREF - DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Parentesco</label>
                    <input
                      onChange={(e) => refparentescoset(e.target.value)}
                      value={refparentesco}
                      type="text"
                      id="refparentesco"
                      placeholder="PARENTESCO"
                      className="bg-slate-500"
                    />
                  </div>
                  {/*DIV - TELEFONOREF - DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Telefono</label>
                    <input
                      onChange={(e) => reftelefonoset(e.target.value)}
                      value={reftelefono}
                      type="text"
                      id="reftelefono"
                      placeholder="TELEFONO"
                      className="bg-slate-500"
                    />
                  </div>
                  {/*DIV - DOMICILIOREF - DATO */}
                  <div className="m-2 gap-2 flex">
                    <label htmlFor="">Domicilio</label>
                    <input
                      onChange={(e) => refdomicilioset(e.target.value)}
                      value={refdomicilio}
                      type="text"
                      id="refdomicilio"
                      placeholder="DOMICILIO  "
                      className="bg-slate-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-emerald-700 mx-96  p-3 text-white font-bold "
              type="submit"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

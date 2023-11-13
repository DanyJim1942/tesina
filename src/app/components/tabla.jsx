import navbar from "@/app/components/navbar";
import Links from "next/link";

export default function Abonos() {
    
  return (
    <div>
      {navbar()}
      <table border="1">
        <tr>
            <th>Cuenta</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Saldo</th>
            <th>Producto</th>
            <th>Vendedor</th>
            <th>Boton</th>
        </tr>
        <tr>
            <td>001</td>
            <td>Juan Pérez</td>
            <td>100.00</td>
            <td>500.00</td>
            <td>100.00</td>
            <td>500.00</td>
            <td key={"/movimientos/abonos"}>
              <Links href="/movimientos/abonos">Abonos</Links>
            </td>

        </tr>
        <tr>
            <td>002</td>
            <td>María López</td>
            <td>75.50</td>
            <td>250.25</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Carlos Rodríguez</td>
            <td>120.75</td>
            <td>700.10</td>
        </tr>
    </table>



      {/*Abonoss/>*/}
    </div>
  );
}

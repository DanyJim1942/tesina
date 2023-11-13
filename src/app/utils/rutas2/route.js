import Contact from "../modelos/venta";
import connectDB from "@/app/libs/mogod";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const { cuenta, producto1, producto2, producto3, precio,
    enganche, abono1, abono2, abono3, fechaventa,
    fechacobro1, fechacobro2, vendedor, cobrador, estado,
    nombre, telefono, refnombre, refdomicilio, reftelefono,
    refparentesco, municipio, poblacion, 
    detpoblacion } = await req.json();

    

  try {
    await connectDB();
    
    await Contact.create ({ cuenta,  producto1, producto2, producto3, precio,
        enganche, abono1, abono2, abono3, fechaventa,
        fechacobro1, fechacobro2, vendedor, cobrador, estado,
        nombre, telefono, refnombre, refdomicilio, reftelefono,
        refparentesco, municipio, poblacion, 
        detpoblacion });
      console.log("se hizo", producto1);
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}

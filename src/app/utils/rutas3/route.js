import Venta from "../modelos/venta";
import connectDB from "@/app/libs/mogod";
import { NextResponse } from "next/server";
export async function GET() {
    await connectDB();
    console.log("ruta3");
    var ventas = await Venta.find();
    
    return ventas;
    
}

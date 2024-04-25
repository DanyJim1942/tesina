import Venta from "../../utils/modelos/venta";
import connectDB from "@/app/libs/mogod";
import { NextResponse } from "next/server";
export async function GET() {
    
    await connectDB();
    const venta = await Venta.find();
    console.log("ruta3api");
    return venta;
    
}

import Contact from "../modelos/venta";
import connectDB from "@/app/libs/mogod";
import { NextResponse } from "next/server";
export async function GET() {
    await connectDB();
    const contact = await Contact.find();
    console.log("se entro");
    return contact;
}

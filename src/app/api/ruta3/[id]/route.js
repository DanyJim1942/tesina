import Venta from "../../../utils/modelos/venta";
import connectDB from "@/app/libs/mogod";
import { NextResponse } from "next/server";
export async function GET( request, {params}) {
    
    await connectDB();
    await Venta.findOne({
        cuenta: params.cuenta
    })
    console.log("2");
    
}

export async function PUT(request, { params }) {
    const { id } = params;
    const  venta = await request.json();
    await connectDB();
    await Venta.findByIdAndUpdate(id, venta);
    return NextResponse.json({ message: "Venta actulizada" }, { status: 200 });
  }


  export async function DELETE(request, {params}) {
    const id = params.id;
    await connectDB();
    await Venta.findOneAndDelete({
        cuenta: id
    });
    return NextResponse.json({ message: "Venta eliminada" }, { status: 200 });
  }
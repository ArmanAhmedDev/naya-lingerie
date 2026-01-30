"use server";

import { handlePatch , handleDelete, handleGetById } from "../../../../../controllers/product.controller";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = await params;   // ✅ NO await

    return handleGetById(id)
}

// Forward PATCH request to handlePatch controller
export async function PATCH(request , {params}) {
    
    // Get id of the product from params
    const {id} = await params

    return handlePatch(request , id);
}

// Forward DELETE request to handleDelete controller
export async function DELETE(request , {params}) {

    // Get id of the product from params
    const {id} = await params

    return handleDelete(request , id);
}

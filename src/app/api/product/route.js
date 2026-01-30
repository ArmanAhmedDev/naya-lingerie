"use server";

import { NextResponse } from "next/server";
import { handleGet , handlePost , handlePatch ,handleDelete } from "../../../../controllers/product.controller";

// Forward GET request to handleGet controller
export async function GET(request) {
    return handleGet(request);
}

// Forward POST request to handlePost controller
export async function POST(request) {
    return handlePost(request);
}


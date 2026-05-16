import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tokenResponse = await auth.api.getToken({ headers: await headers() });
    const tokenValue = typeof tokenResponse === "object" ? tokenResponse?.token : tokenResponse;
    
    return NextResponse.json({ token: tokenValue || null });
  } catch (error) {
    console.error("Error fetching token:", error);
    return NextResponse.json({ token: null }, { status: 500 });
  }
}

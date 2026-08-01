import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Profile from "@/models/Profile";

export async function GET() {

    await connectMongoDB();

    const profile = await Profile.findOne();

    return NextResponse.json(profile);

}
import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
    try {
        await connectMongoDB();

        const formData = await request.formData();

        const title = formData.get("title");
        const description = formData.get("description");
        const githubLink = formData.get("githubLink");
        const file = formData.get("file");

        // Validate GitHub URL
        let url;

        try {
            url = new URL(githubLink);
        } catch {
            return NextResponse.json({
                success: false,
                message: "Invalid URL.",
            });
        }

        if (url.protocol !== "https:") {
            return NextResponse.json({
                success: false,
                message: "URL must start with https://",
            });
        }

        if (
            url.hostname !== "github.com" &&
            !url.hostname.endsWith(".github.com")
        ) {
            return NextResponse.json({
                success: false,
                message: "Only GitHub links are allowed.",
            });
        }

        if (!file) {
            return NextResponse.json({
                success: false,
                message: "No image selected.",
            });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

        const result = await cloudinary.uploader.upload(base64, {
            folder: "portfolio",
        });

        const project = await Project.create({
            title,
            description,
            githubLink,
            image: result.secure_url,
        });

        return NextResponse.json({
            success: true,
            project,
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}

export async function GET() {

    try {
        await connectMongoDB();
        const projects = await Project.find().sort({ createAt:-1 });
        return NextResponse.json({
            success: true,
            projects,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}
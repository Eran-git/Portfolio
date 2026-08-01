import { NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";
import Profile from "@/models/Profile";

import { connectMongoDB } from "@/lib/mongodb";

export async function POST(request) {

    try {

        await connectMongoDB(); // connect to mongodb

        const formData = await request.formData(); //getting body of post called formData methods of request

        const file = formData.get("file"); // get image file called "file" which is key of formData

        if (!file) {                    // if failed
            return NextResponse.json({
                success: false,
                message: "No file."
            });
        }

        // File -> Buffer
        const bytes = await file.arrayBuffer(); // "Basahin mo ang buong laman ng file at ibigay mo ito bilang binary data (ArrayBuffer)." ex"01001010 1100101...,
        const buffer = Buffer.from(bytes); //Kinukuha natin ang ArrayBuffer at ginagawa itong Node.js Buffer, na mas madaling gamitin ng Cloudinary para sa upload. or CREATE CONTAINER

        // Buffer -> Base64
        const base64 = // base64 is encoded 
            `data:${file.type};base64,${buffer.toString("base64")}`; // possible output "data:image/jpeg;base64,ABC123XYZ..."

        // Upload Cloudinary
        const result = await cloudinary.uploader.upload(base64, {
            folder: "portfolio", // folder : "portfolio" ang magiging name nang folder mo sa cloudinary. when you upload it return 
                });             // result = {
                                //     asset_id: "...",
                                //     public_id: "...",
                                //     secure_url: "...",
                                //     width: 500,
                                //     height: 500,
                                // }

        // Hanapin kung may profile na
        let profile = await Profile.findOne();

        if (profile) {

            profile.image = result.secure_url;

            await profile.save();

        } else {

            await Profile.create({
                image: result.secure_url,
            });

        }

        return NextResponse.json({
            success: true,
            imageUrl: result.secure_url,
        });

    } catch (error) {

        return NextResponse.json({
            success: false,
            message: error.message,
        });

    }

}
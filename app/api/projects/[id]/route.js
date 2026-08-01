import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";

import Project from "@/models/Project";

import cloudinary from "@/lib/cloudinary";

export async function PUT(request, { params }) {

    try {

        await connectMongoDB();

        const { id } = await params;

        const formData = await request.formData();

        const title = formData.get("title");

        const description = formData.get("description");

        const githubLink = formData.get("githubLink");

        const file = formData.get("file");

        const updateData = {

            title,

            description,

            githubLink,

        };

        if (file) {

            const bytes = await file.arrayBuffer();

            const buffer = Buffer.from(bytes);

            const base64 =
                `data:${file.type};base64,${buffer.toString("base64")}`;

            const result = await cloudinary.uploader.upload(base64, {

                folder: "portfolio",

            });

            updateData.image = result.secure_url;

        }

        const updatedProject =
            await Project.findByIdAndUpdate(

                id,

                updateData,

                {
                    new: true,
                }

            );

        return NextResponse.json({

            success: true,

            project: updatedProject,

        });

    } catch (error) {

        return NextResponse.json({

            success: false,

            message: error.message,

        });

    }

}

export async function DELETE(request, { params }) {
    try {
        await connectMongoDB();

        // Tama ang pagkaka-await mo dito
        const { id } = await params; 

        console.log("ID to delete:", id);

        // BAGUHIN MO ITO: Palitan ang params.id ng id
        const deletedProject = await Project.findByIdAndDelete(id); 

        console.log("Deleted Project:", deletedProject);

        return NextResponse.json({
            success: true,
            deletedProject,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}
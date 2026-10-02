import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Get FormData
    const formData = await request.formData();

    // Get fields
    const title = formData.get("title");
    const description = formData.get("description");
    const techStackData = formData.get("techStack");
    const image = formData.get("image");

    // Convert techStack JSON string back to array
    const techStack = JSON.parse(techStackData);

    // Basic validation
    if (!title || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Title and description are required",
        },
        {
          status: 400,
        }
      );
    }

    // Image URL
    let imageUrl = "";

    // Check if image exists
    if (image && image.size > 0) {
      // Convert image to buffer
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload buffer to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "portfolio/projects",
            resource_type: "image",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        uploadStream.end(buffer);
      });

      // Get Cloudinary URL
      imageUrl = uploadResult.secure_url;
    }

    // Create project in MongoDB
    const project = await Project.create({
      title,
      description,
      techStack,
      image: imageUrl,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        project,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("POST PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create project",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();

    const projects = await Project.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error("GET PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
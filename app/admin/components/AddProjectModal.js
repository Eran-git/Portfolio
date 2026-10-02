"use client";

import { useState } from "react";

export default function AddProjectModal({
  isOpen,
  onClose,
  fetchProjects,
}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState([]);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);

        // Convert array to JSON string
        formData.append(
            "techStack",
            JSON.stringify(techStack)
        );

        // Only append if image exists
        if (image) {
            formData.append("image", image);
        }

        const response = await fetch("/api/projects", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        if (data.success) {
            // Refresh project list
            fetchProjects();

            // Clear form
            setTitle("");
            setDescription("");
            setTechStack([]);
            setImage(null);

            // Close modal
            onClose();
        }
        } catch (error) {
        console.error(error);
        alert("Something went wrong.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

        <div className="bg-white text-black px-5 py-5 rounded-xl w-[360px]">

            {/* Close button */}
            <div className="w-full flex justify-end">
            <button
                type="button"
                onClick={onClose}
                className="text-xl"
            >
                X
            </button>
            </div>

            <div className="flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-5">
                Add Project
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-3"
            >

                {/* Title */}
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                className="border p-2 rounded"
                required
                />

                {/* Description */}
                <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                className="border p-2 rounded"
                required
                />

                {/* Tech Stack */}
                <input
                type="text"
                placeholder="Tech Stack (Next.js, MongoDB, Tailwind)"
                value={techStack.join(", ")}
                onChange={(e) => {
                    const value = e.target.value;

                    const array = value
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item !== "");

                    setTechStack(array);
                }}
                className="border p-2 rounded"
                />

                {/* Image */}
                <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                    setImage(e.target.files[0])
                }
                className="border p-2 rounded"
                />

                {/* Submit */}
                <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded"
                >
                Submit
                </button>

            </form>

            </div>
        </div>
        </div>
    );
}
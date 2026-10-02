
'use client';

import { useEffect, useState } from "react";

export default function EditProjectModal({
    isOpen,
    onClose,
    project,
    fetchProjects,
}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (project) {

            setTitle(project.title || "");
            setDescription(project.description || "");

            setTechStack(
                Array.isArray(project.techStack)
                    ? project.techStack.join(", ")
                    : project.techStack || ""
            );

            setImage(null);
        }

    }, [project]);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description);
            formData.append("techStack", techStack);

            if (image) {
                formData.append("file", image);
            }

            const response = await fetch(
                `/api/projects/${project._id}`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {

                await fetchProjects();

                onClose();

            } else {

                alert(data.message || "Failed to update project.");

            }

        } catch (error) {

            console.error("Update project error:", error);

            alert("Something went wrong.");

        } finally {

            setLoading(false);

        }

    };


    if (!isOpen) return null;


    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

                {/* Header */}

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-xl font-semibold text-gray-900">
                        Edit Project
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-xl text-gray-400 transition hover:text-gray-700"
                    >
                        ✕
                    </button>

                </div>


                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    {/* Title */}

                    <div>

                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Project Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter project title"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            required
                        />

                    </div>


                    {/* Description */}

                    <div>

                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter project description"
                            rows={4}
                            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            required
                        />

                    </div>


                    {/* Tech Stack */}

                    <div>

                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Tech Stack
                        </label>

                        <input
                            type="text"
                            value={techStack}
                            onChange={(e) => setTechStack(e.target.value)}
                            placeholder="e.g. Next.js, MongoDB, Tailwind CSS"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            required
                        />

                        <p className="mt-1 text-xs text-gray-400">
                            Separate technologies with commas.
                        </p>

                    </div>


                    {/* Image */}

                    <div>

                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Project Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setImage(e.target.files?.[0] || null)
                            }
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                        />

                        <p className="mt-1 text-xs text-gray-400">
                            Leave empty if you don't want to change the image.
                        </p>

                    </div>


                    {/* Buttons */}

                    <div className="mt-3 flex justify-end gap-2">

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:opacity-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Updating..." : "Update Project"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}


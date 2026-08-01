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
    const [githubLink, setGithubLink] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {

        if (project) {

            setTitle(project.title);
            setDescription(project.description);
            setGithubLink(project.githubLink);

        }

    }, [project]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("githubLink", githubLink);

        if (image) {

            formData.append("file", image);

        }

        const response = await fetch(`/api/projects/${project._id}`, {

            method: "PUT",

            body: formData,

        });

        const data = await response.json();

        if (data.success) {

            fetchProjects();

            onClose();

        }

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

            <div className="bg-white p-8 rounded-xl w-[500px]">

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />

                    <textarea
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />

                    <input
                        value={githubLink}
                        onChange={(e)=>setGithubLink(e.target.value)}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e)=>setImage(e.target.files[0])}
                    />

                    <button>

                        Update

                    </button>

                </form>

            </div>

        </div>

    );

}
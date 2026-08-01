'use client';

import { useState } from 'react';

export default function AddProjectModal({
    isOpen,
    onClose,
    fetchProjects,
}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("githubLink", githubLink);
        formData.append("file", image);

        const response = await fetch("/api/projects", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {

            fetchProjects();

            onClose();

        } else {

            alert(data.message);

        }

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/70 flex flex-col justify-center items-center">

            <div className="flex flex-col justify-between items-between bg-white text-black px-3 py-3 rounded-xl w-90">

                <div className='w-full'>
                    <button
                        onClick={onClose}
                        className="flex justify-end w-full"
                    >
                        X
                    </button>
                </div>


                <div className='flex flex-col justify-center items-center'>

                    <h1 className="text-3xl font-bold mb-5">
                        Add Project
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col w-full gap-3"
                    >

                        <input
                            placeholder="Title"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            className="border p-2"
                        />

                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            className="border p-2"
                        />

                        <input
                            placeholder="Github Link"
                            value={githubLink}
                            onChange={(e)=>setGithubLink(e.target.value)}
                            className="border p-2"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e)=>setImage(e.target.files[0])}
                            className="border p-2"
                        />

                        <button
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
'use client';

import { useState, useEffect } from "react";

export default function ProfileImage() {

    const [preview, setPreview] = useState("/images/unknown.jpg");

    useEffect(() => {

        fetch("/api/profile")
            .then(res => res.json())
            .then(data => {

                if (data?.image) {

                    setPreview(data.image);

                }

            });

    }, []);

    const handleChangeImage = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();  // instantiation with empty box, when you append it,going to happen

        formData.append("file", file);   // "file" is a key / file is file object the user input

        const response = await fetch("/api/upload", {  // connect it into api upload file

            method: "POST",
            body: formData,

        });

        const data = await response.json();

        if (data.success) {

            setPreview(data.imageUrl);  //if success set the Preview image
            console.log(preview);

        }

    };

    return (
        <div className="group relative flex flex-col justify-center items-center">

            <div className="w-35 h-35 rounded-full bg-gray-500 overflow-hidden relative">

                <img
                    src={preview}
                    alt="profile"
                    className="w-full h-full object-cover"
                />

                <label
                    htmlFor="Select_profile"
                    className="absolute inset-0 flex justify-center items-center
                    bg-black/40 text-white font-bold cursor-pointer
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Upload
                </label>

                <input
                    id="Select_profile"
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="hidden"
                />

            </div>

        </div>
    );
}
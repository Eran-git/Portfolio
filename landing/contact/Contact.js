'use client'
import { MapPin, Mail, Send } from "lucide-react"

import Image from "next/image"
import { useState } from "react";

export default function Contact({isDarkMode, mobileSize}) {

    const contact = [
        {name: "Github", src: "/techtools/github.png"},
        {name: "facebook", src: "/images/facebook.png"},
        {name: "linkedIn", src: "/images/linkedin.png" }
    ]


    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setStatus(data.message || "Failed to send message.");
                return;
            }

            setStatus("Message sent successfully!");
            e.currentTarget.reset();
        } catch {
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className={` 
                ${isDarkMode
                ? "bg-white"
                : "bg-black"
                } 
                w-full
                md:px-30
                md:py-10`}
        >

            <h1 className={` 
                ${isDarkMode 
                ? "text-black/60" 
                : "text-white/60"}
                text-xl`}
            >
                Contact
            </h1>

            <div className="flex justify-between">

                <div>
                    <p className={`
                        ${isDarkMode 
                        ? "text-black/100" 
                        : "text-white/100"}
                        font-bold text-5xl
                        pt-3`}
                    >
                        Ready to Work <span className="font-thin">Together</span>
                    </p>

                    <p className={`
                        ${isDarkMode
                            ? "text-black/60"
                            : "text-white/60"}
                            text-xl mt-5`}>
                        Have a project in mind or just want to say hi? <br/>
                        Feel free to reach out!
                    </p>

                    <div className="flex flex-col items-start gap-2 mt-3">
                        <div className={`
                            ${isDarkMode
                                ? "text-black"
                                : "text-white"}
                                flex justify-center items-center gap-3`}
                        >
                            <Mail />
                            <h1>ramonagbuya20@gmail.com</h1>
                        </div>

                        <div className={`
                            ${isDarkMode
                                ? "text-black"
                                : "text-white"}
                                flex justify-center items-center gap-3`}
                        >
                            <MapPin />
                            <h1>Philippines</h1>
                        </div>


                    </div>

                    <ul className="flex gap-4 list-none pt-5">
                        {contact.map((item) => (
                            <li key={item.name}
                                className=""
                            >
                                <Image 
                                src={item.src}
                                alt={item.name}
                                height={30}
                                width={30}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className={`${
                        isDarkMode ? "text-black/60" : "text-white/60"
                    } flex flex-col gap-2`}
                >
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            maxLength={100}
                            className={`${
                                isDarkMode
                                    ? "bg-black/60 text-white"
                                    : "bg-white/20"
                            } border border-blue-400 rounded-lg px-5 py-3`}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            maxLength={254}
                            className="border border-blue-400 rounded-lg px-5 py-3 bg-white/20"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your Message..."
                        required
                        maxLength={5000}
                        className="border border-blue-400 rounded-lg px-5 py-3 bg-white/20 h-35"
                    />

                    <button
                        type="submit"
                        className="flex justify-center items-center gap-3 bg-blue-400 rounded-lg py-2 hover:bg-blue-500"
                    >
                        <Send />
                        Send Message
                    </button>

                    {status && <p role="status">{status}</p>}
                </form>
            </div>
        </section>
    )
}
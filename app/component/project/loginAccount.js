import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function LoginAccount({isOpen, onClose}) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("../api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({  
                email,
                password,
            }),           
        })
        const data = await response.json(); //response.json() server to client        
        if(data.success) {
            onClose()
            router.push("/admin");
        }else {
            alert(data.message);
        }
    } 

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "auto";
        }
        return () => document.body.style.overflow ="auto"
    })

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            };
        };
            window.addEventListener("keydown", handleKeyDown);
            
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            };
    }, [onClose]);

    if(!isOpen) return null;

    return (
        <>
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <form className="relative flex flex-col justify-center items-center gap-4 rounded-xl w-96 p-6 bg-gray-500"
                    onSubmit={handleSubmit}
            >
                <h1 className="mb-5 text-4xl font-ariel font-bold">SignUp</h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-black py-2 px-5 border-1 rounded-xl w-full"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white text-black py-2 px-5 border-1 rounded-xl w-full"
                />
                
                <button className="w-full h-10 rounded-2xl bg-cyan-500 hover:bg-cyan-400 font-bold text-xl"
                        type="submit"
                >
                    Submit
                </button>

                <button className="absolute right-2 top-0"
                        onClick={onClose}
                    >x
                </button>
            </form>
        </div>
        </>
    );
};
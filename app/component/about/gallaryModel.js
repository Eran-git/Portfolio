import { useState, useEffect} from "react";


export default function GalleryModal({ isOpen, onClose }) {

    // no scrolling while it is show
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";

        }else {
            document.body.style.overflow = "auto";
        };

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    // when you press Esc key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);


    if (!isOpen) return null;

    const images = [
        "/images/junior/1.jpg",
        "/images/junior/2.jpg",
        "/images/junior/3.jpg",
        "/images/junior/4.jpg",
        "/images/junior/5.jpg",
        "/images/junior/6.jpg",
        "/images/junior/7.jpg",
        "/images/junior/8.jpg",
        "/images/junior/9.jpg",

    ]

    const dupImages = [...images, ...images];

    return (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="bg-gray-900 p-8 rounded-xl relative w-full h-100 flex 
                            justify-center items-center gap-5 overflow-hidden md:w-full md:h-100 md:m-40"
            >

                <div className="animation-scroll flex justify-center items-center gap-10 h-70">
                {/* duplicate for infinite effect */}
                {dupImages.concat(dupImages).map((image, index) => (
                    <div className="h-full w-70 rounded-10" key={index}>
                        <img 
                            src={image} 
                            alt="skill" 
                            className="w-full h-full"
                        />
                    </div>
                ))}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 pt-2 pr-5"
                >
                    Close
                </button>

            </div>

        </div>

    )

}
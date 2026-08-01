'use client'
import { motion} from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mobileSize, setMobileSize] = useState(true);

    useEffect(() => {
        const checkScreen = () => {
            setMobileSize(window.innerWidth < 768);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
        
    }, []);

    // useEffect(() => {
    //     window.scrollTo({top: 0, behavior: "instant"})
    // })

    return (
        <>
            <div id="hero" className="w-full h-screen flex flex-col-reverse items-center justify-center 
                md:px-20 md:flex-row mt-10 md:justify-between">

                <motion.div className=" flex flex-col p-8 rounded-lg shadow-lg text-center
                    md:gap-4 md:text-start"
                    initial={mobileSize ? {y: -200, opacity: 0} : {x: -200, opacity: 0}}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{duration: 1}}
                >
                    <h1 className="animation-shine bg-gradient-to-r from-blue-500 via-white to-purple-500
                        bg-clip-text text-transparent [background-size:200%_100%] text-4xl font-bold 
                        md:text-7xl">
                        Eran Agbuya
                    </h1>
                    <span className="text-2xl text-blue-500 bg-gradient-to-r from-blue-500 via-white to-blue-500 
                        [background-size:200%_100%] bg-clip-text text-transparent animation-shine
                          md:text-6xl">
                        FullStack Web Developer  
                    </span>
                    <p className="mt-2 text-xl md:text-2xl text-gray-400">
                        Im a passionate develope and building web applications.
                    </p>
                </motion.div>
                {/* //image container */}
                <motion.div id="hero-image" className=" w-[200px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden"
                    initial={mobileSize ? {opacity: 0, y: -200} : {x: 200, opacity: 0}}
                    whileInView={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 1}}
                >
                    <img 
                        src="/images/eran.jpg"
                        alt="Hero Image" 
                        className="w-full h-full object-cover" 
                    />
                </motion.div>
            </div>
        </>
    );
}
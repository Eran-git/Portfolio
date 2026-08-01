export default function SkillsPage() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "Git & GitHub",
    ];

    return (
        <section
            id="skills"
            className="min-h-screen bg-gray-900 text-white flex flex-col justify-center py-20 px-6"
        >
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Skills
                </h2>

                <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
                    Here are the technologies and tools I use to build
                    responsive and modern web applications.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-14">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
                        >
                            <h3 className="font-semibold text-lg">
                                {skill}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
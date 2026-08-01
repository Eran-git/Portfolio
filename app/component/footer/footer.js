export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="w-full flex justify-center items-center">
                    <p className="text-sm mt-2">
                        Building modern web applications with
                        Next.js, React, Tailwind CSS, MongoDB,
                        and Cloudinary.
                    </p>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                © 2026 Eran. All Rights Reserved.
            </div>
        </footer>
    );
}
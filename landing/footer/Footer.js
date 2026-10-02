export default function Footer({ isDarkMode}) {
    return (
        <footer className={` 
            ${isDarkMode 
            ? "bg-black/10" 
            : "bg-white/10"}
            flex justify-center items-center 
            py-10
            `}
        >
                <p>© 2026 Eran. All Rights Reserved.</p>
        </footer>
    );
}
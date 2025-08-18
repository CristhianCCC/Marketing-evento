import { useState } from "react";


export default function Navbar () {

    const [menuOpen, setMenuOpen] = useState (false);

    return (
        <>
        <nav>
            <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
            </button>
            <ul className={`rounded-2xl p-5 flex lg:justify-evenly text-center justify-between items-center bg-gray-900 shadow-2xl gradient-pink font-bold overflow-hidden duration-300 ease-out ${menuOpen ? 'flex-col-reverse max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:max-h-none lg:opacity-100`}>
                <a href = "#hero" className="smooth hover:text-xl duration-300 ease-in-out">Inicio</a>
                <a href = "#about" className="smooth hover:text-xl duration-300 ease-in-out">Acerca Del Evento</a>
                <a href = "#host" className="smooth hover:text-xl duration-300 ease-in-out">Host</a>
                <a href = "#testimonials" className="smooth hover:text-xl duration-300 ease-in-out">Testimoniales</a>
                <a href = "#bonus" className="smooth hover:text-xl duration-300 ease-in-out">Bonos</a>
                <a href = "#tickets" className="smooth hover:text-xl duration-300 ease-in-out">Entradas</a>
            </ul>
        </nav>
    </>
    )
}
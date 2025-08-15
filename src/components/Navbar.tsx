import { useState } from "react";
import { Link } from "react-router";


export default function Navbar () {

    const [menuOpen, setMenuOpen] = useState (false);

    return (
        <>
        <nav>
            <button className="lg:hidden text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
            </button>
            <ul className={`rounded-2xl p-5 flex lg:justify-evenly justify-between items-center bg-gray-100 shadow-2xl text-purple-900 overflow-hidden duration-300 ease-out ${menuOpen ? 'flex-col-reverse max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:max-h-none lg:opacity-100`}>
                <Link to = "hero" className="smooth hover:text-xl duration-300 ease-in-out">Inicio</Link>
                <Link to = "about" className="smooth hover:text-xl duration-300 ease-in-out">Acerca Del Evento</Link>
                <Link to = "" className="smooth hover:text-xl duration-300 ease-in-out">Invitados</Link>
                <Link to = "" className="smooth hover:text-xl duration-300 ease-in-out">Caracteristicas</Link>
                <Link to = "" className="smooth hover:text-xl duration-300 ease-in-out">Inscripcion</Link>
            </ul>
        </nav>
    </>
    )
}
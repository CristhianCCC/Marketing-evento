import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import hostimg1 from "../img/host.jpg";
import hostimg2 from "../img/host2.jpg";
import hostimg3 from "../img/host3.png";

const host = [
    {
    hostName: "Monica Bustamante",
    hostText: `Coach, conferencista y mujer real. 
    He acompañado a miles de mujeres, hombres, deportistas y empresarios a recordar quiénes son, a reconectarse con su poder interior y a liderar sus vidas desde el amor propio. 
    Reconocimientos: 2 Guinness World Records, Experta en neurociencia y gerencia estratégica, Fundadora de programas de transformación emocional y mentalidad.`,
    hostSlogan: "El verdadero éxito nace cuando conectas con tu esencia y eliges escuchar tu corazón.",
    hostIgUrl: "https://www.instagram.com/monica_bustamante_coach?igsh=cGxpbGQ2YzU3cGo4",
    hostIgTitle: "@monica_bustamante_coach",
    hostImg: hostimg1
    },
    {
    hostName: "Diana Escobar",
    hostText: `Soy la Dra. Diana Escobar, odontóloga y estratega en ventas. 
    Transformé mi consultorio aplicando técnicas de cierre y servicio al cliente que hoy me permiten no solo crecer, sino enseñar a otros profesionales cómo lograrlo. 
    En nuestro evento presencial compartiré las mismas estrategias que cambiaron mi historia, para que tú también aprendas a llenar tu agenda, cerrar más ventas y construir un consultorio rentable y estable.`,
    hostSlogan: "Vender no es convencer, es conectar y generar confianza.",
    hostIgUrl: "https://www.instagram.com/diana.fernanda2/?igsh=MW8weG83dnUwNm84NA%3D%3D&utm_source=qr#",
    hostIgTitle: "@diana.fernanda2",
    hostImg: hostimg3
    },
    {
    hostName: "Fernanda Caicedo",
    hostText: `Soy Fernanda Caicedo, estratega en marketing y negocios, apasionada por descubrir cómo las empresas pueden crecer cuando combinan creatividad, estrategia y herramientas modernas como la inteligencia artificial. 
    A lo largo de mi experiencia, he tenido la oportunidad de acompañar a negocios en su transformación, como el Consultorio Odontológico de la Dra. Diana Escobar, donde implementamos estrategias que no solo aumentaron la visibilidad, sino que también mejoraron la forma en que se conectaban con sus pacientes, logrando resultados medibles y reales. 
    Mi propósito es claro: mostrar que la inteligencia artificial no es algo lejano ni complicado, sino una aliada práctica que puede ayudar a cualquier negocio a organizarse mejor, comunicarse de manera más efectiva y abrir nuevas oportunidades de crecimiento. 
    En esta conferencia compartiré de forma sencilla y aplicable cómo integrar el marketing con la tecnología, para que tu empresa pueda dar pasos firmes hacia un futuro más rentable y competitivo.`,
    hostSlogan: "No apuesto a la suerte, apuesto a la estrategia que convierte sueños en resultados.",
    hostIgUrl: "https://www.instagram.com/diana.fernanda2/?igsh=MW8weG83dnUwNm84NA%3D%3D&utm_source=qr#",
    hostIgTitle: "@diana.fernanda2",
    hostImg: hostimg2
    },
    
]

export default function Host () {

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + host.length) % host.length);
    const next = () => setCurrent((current + 1) % host.length);

    // Configuración para swipe
    const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    });

    return (
        <>
        <section id = "host">
            <div {...handlers} className="relative lg:mx-20"> {/*activando el swipe */}
                    <h2 className="text-4xl font-bold text-center py-2 gradient-gold hover:text-5xl duration-300 ease-in-out pt-10">Nuestras Host: {host[current].hostName}</h2>
                    <div className="grid lg:grid-cols-2 gap-5 py-5 lx:px-40">
                        {/*img container*/}
                        <div className="flex justify-center">
                            <img src={host[current].hostImg} alt="Host img" className="rounded-2xl w-full max-w-md h-100"/>
                        </div>

                        {/*host info*/}
                        <div className="text-center text-xl px-5">
                                 {host[current].hostText
                                    .split(/\n+/) 
                                    .filter((p) => p.trim() !== "")
                                    .map((paragraph, index) => (
                                    <p key={index} className="leading-relaxed text-xl px-5 text-white">{paragraph.trim()}</p>
                                ))}
                            <p className="font-bold gradient-pink italic py-5">&ldquo;{host[current].hostSlogan}&ldquo;</p>
                            {/*ig card*/}
                            <a href={host[current].hostIgUrl} target="_blank" rel="noopener noreferrer"className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transform transition duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5h8.5A4.25 4.25 0 0 1 20.5 7.75Zm-8.5 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM17 7.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" /></svg>{host[current].hostIgTitle}</a>
                        </div>
                    </div>
                    {/*flechas*/}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"> 
                            ‹
                        </button>
                    
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition">
                    ›
                    </button>
                </div>
            </section>
        </>
    )
}
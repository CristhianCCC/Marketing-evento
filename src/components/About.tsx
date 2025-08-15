import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import about1 from "../img/about1.png";


export default function About () {
    return (
        <>
        <section id ="about">
            <h2 className="text-4xl font-bold text-center py-5 hover:text-5xl duration-300 ease-in-out text-purple-900">¿Qué encontrarás en este evento?</h2>
            <div className="grid lg:grid-cols-2 gap-2 items-center px-4 lg:px-20 xl:px-60">
                <div>
                    <p className="text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                        "Una mente en paz y un corazón conectado son más fuertes que cualquier estrategia de negocios… pero cuando se combinan con marketing y ventas conscientes, el impacto es imparable."
                        Esta conferencia no solo te inspirará: te moverá a la acción.
                        Es un espacio para soltar la autoexigencia, el autosabotaje y la mentalidad de carencia que muchas mujeres arrastran mientras intentan construir algo afuera.
                        Aquí vas a reconectarte contigo misma, con tu valor, tu propósito y tu capacidad de liderar tu vida personal y empresarial desde un lugar auténtico: el amor propio.
                        Y además, descubrirás cómo convertir tu mensaje en una marca poderosa, cómo comunicarlo con impacto y cómo potenciar tus ventas desde la conexión y no desde la presión.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img className="rounded-2xl w-full max-w-md object-contain" src={about1} alt="About 1" />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-3 text-2xl py-10 ">

                <div className="flex flex-col items-center hover:text-3xl duration-300 ease-in-out">
                    <FcCalendar />
                    <h2 className="my-2" >6 de agosto</h2>
                    <FcClock className="my-2"/>
                    <h2 >7:00 p.m. a 8:30 p.m.</h2>
                </div>
                <div className="flex flex-col items-center hover:text-3xl duration-300 ease-in-out">
                        <FaLocationDot className="text-red-600 my-2"/>
                        <h2 className="text-center">Santiago de Cali Calle 13 Norte #6N40 Barrio Granada (Asociacion Colombo Japonesa)</h2>
                </div>
                <div>
                    <div className="flex flex-col items-center hover:text-3xl duration-300 ease-in-out">
                        <IoTicketSharp className="text-yellow-700 my-2"/>
                        <h2 className="text-center">Preventa: $80.000 hasta el 31 de julio - Cupos limitados</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
import details1 from "../img/details1.jpg"

export default function Details () {

    return (
        <>
            <h2 className="text-4xl font-bold text-center py-5 hover:text-5xl duration-300 ease-in-out text-purple-900">Lo que experimentarás en este evento.</h2>

            <div className="grid lg:grid-cols-2 items-center">
                <div className="flex justify-center">
                    <ul className="py-5 list-disc list-inside text-left space-y-5 text-xl px-10">
                        <li>Reconectar con tu poder femenino desde la verdad, no desde el sacrificio</li>
                        <li>Identificar los autosabotajes que frenan tu emprendimiento y tu felicidad</li>
                        <li>Activar el amor propio como tu mayor estrategia de éxito</li>
                        <li>Rodearte de mujeres como tú: valientes, sensibles, imparables</li>
                        <li>Descubrir estrategias de marketing que comuniquen tu esencia y potencien tu impacto</li>
                        <li>Aprender técnicas de ventas que generen conexión real y resultados sostenibles.</li>
                        <li>Diseñar ofertas irresistibles alineadas con tu propósito y el mercado.</li>
                        <li>Integrar tu marca personal en cada paso de tu estrategia de negocios.</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img className="rounded-2xl w-full max-w-md object-contain" src={details1} alt="About 1" />
                </div>            
            </div>
        </>
    )

}
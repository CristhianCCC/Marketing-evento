import details1 from "../img/details1.jpg"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Details() {
    return (
        <>
             <motion.h2 
                className="text-4xl font-extrabold text-center py-5 
                           bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
                           bg-clip-text text-transparent 
                           animate-pulse"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Lo que experimentarás en este evento
            </motion.h2>

            <div className="grid lg:grid-cols-2 items-center text-white">
                {/* Lista animada  */} 
                 <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ul className="py-5 space-y-5 text-xl px-10">
                        {[
                            "Reconectar con tu verdadero potencial, dejando atrás creencias y hábitos que limitan tu crecimiento personal y empresarial.",
                            "Identificar los autosabotajes que frenan tu emprendimiento y reemplazarlos por una mentalidad enfocada en el éxito.",
                            "Activar la confianza y la seguridad como tu mayor estrategia para alcanzar metas reales y sostenibles.",
                            "Conectarte con personas que, como tú, buscan crecer, aprender y llevar sus negocios al siguiente nivel.",
                            "Descubrir estrategias de marketing que comuniquen tu esencia, transmitan tu valor y generen mayor impacto en el mercado.",
                            "Aprender técnicas de ventas que construyen conexión genuina con los clientes y se traducen en resultados constantes.",
                            "Diseñar ofertas irresistibles, alineadas con tu propósito y con las necesidades del mercado actual.",
                            " Conocer cómo la inteligencia artificial puede convertirse en tu aliada estratégica para optimizar procesos, ahorrar tiempo y multiplicar oportunidades de crecimiento.",
                        ].map((item, i) => (
                            <li 
                                key={i} 
                                className="flex items-start gap-3 hover:text-pink-400 transition duration-300"
                            >
                                <CheckCircle className="text-pink-500 mt-1 w-6 h-6" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                 </motion.div>

                {/* Imagen animada */} 
                <motion.div 
                    className="flex justify-center "
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img 
                        className="rounded-2xl max-w-md object-contain w-50
                                   shadow-lg hover:scale-105 transition duration-500" 
                        src={details1} 
                        alt="Detalles del evento" 
                    />
                </motion.div>
            </div>
        </>
    )
}

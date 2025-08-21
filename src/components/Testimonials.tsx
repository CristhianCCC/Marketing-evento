import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import testimonial1 from "../img/testimonial1.png";
import testimonial2 from "../img/testimonial2.png";
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Beatriz Mozo",
    role: "Campeona Mundial De Natacion Con Aletas",
    text: "Logré superar las barreras del miedo y logre ser la campeona del mundo.",
    img : testimonial1,
    videoURL: "https://www.instagram.com/p/CCAH58Fguot/?igsh=NjBiYnlrNmRmcGZo"
  },
  {
    name: "Otto Ontaneda",
    role: "Emprendedor Digital",
    text: "Estaba en un momento muy difícil… hasta que llegué a un programa con Mónica. Aprendí a perdonarme, soltar y sanar lo que me tenía atado. Desde entonces, mi vida y mis resultados comenzaron a fluir.",
    img: testimonial2,
    videoURL: "https://www.instagram.com/tv/CPE9v0qn-ja/?igsh=MWN4cHA5cDhwa3d1ZQ%3D%3D"
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  // Configuración para swipe
    const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    });

  return (
    <section {...handlers} id='testimonials' className="py-16 ">
    <h2 className="text-4xl font-bold text-center gradient-gold hover:text-5xl duration-300 ease-in-out ">Ellos ya lo vivieron.</h2>

      <div className="relative mt-10 max-w-3xl mx-auto">
        {/* Tarjeta */}
          <motion.div
          key={current} 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-bl from-gray-100 via-gray-300 to-gray-100 shadow-gray-400 p-6 rounded-xl shadow-lg text-center">
        <div className='flex justify-center'>
            <img src={testimonials[current].img} alt={testimonials[current].name} className='rounded-full h-30'/>
          </div>
          <p className="text-lg italic mb-4">&ldquo;{testimonials[current].text}&rdquo;</p>
          <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
          <p className="bg-gradient-to-br from-emerald-300 to-emerald-600 bg-clip-text text-transparent font-xl font-bold">{testimonials[current].role}</p>
          
          <a href={testimonials[current].videoURL} target="_blank" rel="noopener noreferrer"className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transform transition duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5h8.5A4.25 4.25 0 0 1 20.5 7.75Zm-8.5 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM17 7.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5h8.5A4.25 4.25 0 0 1 20.5 7.75Zm-8.5 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM17 7.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" /></svg>Ver video</a>
        </motion.div>

        {/* Flechas */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-300 to-emerald-600  text-white p-2 rounded-full"
        >
            ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-300 to-emerald-600 text-white p-2 rounded-full "
        >
          ›
        </button>
      </div>
    </section>
  );
}

import { RiWhatsappFill } from "react-icons/ri";

export default function Ticket() {
  return (
    <section id="tickets" className="py-12 px-4 bg-gray-50">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-900 hover:text-5xl duration-300 ease-in-out">
        Tú no estás aquí por suerte. Estás aquí porque estás lista.
      </h2>

      {/* Descripción */}
      <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-6 text-gray-700">
        El mayor acto de amor propio… es tomar decisiones alineadas contigo.
        Esta no es solo una conferencia. Es una inversión emocional y personal
        para ti, tu vida y tu negocio.
      </p>

      {/* Información de ticket */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold">Reserva ya tu entrada.</h3>
        <p className="text-lg text-gray-600">
          $80.000 <span className="text-sm">(Preventa hasta el 31 de julio)</span>
        </p>
      </div>

      {/* Sección WhatsApp */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-lg text-gray-700">
          <RiWhatsappFill className="text-emerald-600 text-2xl" />
          <span>Te espero en WhatsApp</span>
        </div>

        <a
          href="https://api.whatsapp.com/message/P7QXQVX4IAQGO1?autoload=1&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-green-600 text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <RiWhatsappFill className="text-xl" />
          <span className="font-xl font-bold">Adquiere tu entrada ahora por WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

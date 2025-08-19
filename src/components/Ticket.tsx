
export default function Ticket() {
  return (
    <section id="tickets" className="py-12 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-gold hover:text-5xl duration-300 ease-in-out">
        Tú no estás aquí por suerte. Estás aquí porque estás listo.
      </h2>

      {/* Descripción */}
      <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-6 text-white">
        El mayor acto de amor propio… es tomar decisiones alineadas contigo.
        Esta no es solo una conferencia. Es una inversión emocional y personal
        para ti, tu vida y tu negocio.
      </p>
    </section>
  );
}

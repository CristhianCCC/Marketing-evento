
export default function Ticket() {
  return (
    <section id="tickets" className="py-12 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-gold hover:text-5xl duration-300 ease-in-out">
        El inicio de tu transformación comienza aquí
      </h2>

      {/* Descripción */}
      <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-6 text-white">
        Este es el momento de dejar de soñar con resultados y empezar a crearlos. 
        <br />El 17 de septiembre no será solo un evento, será el inicio de la transformación que tu negocio y tu mentalidad necesitan. 
        <br />Da el paso hoy y asegura tu lugar antes de que sea tarde.
      </p>
    </section>
  );
}

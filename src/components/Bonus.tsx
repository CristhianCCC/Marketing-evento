import { RiWhatsappFill } from "react-icons/ri";


export default function Bonus() {
  return (
    <section id="bonus" className="px-6 lg:px-20 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Nuestra Promesa */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-6">Nuestra Promesa</h2>
        <p className="text-xl leading-relaxed mb-4">
          Si el <span className="font-bold">17 de septiembre</span> este evento no te mueve, no te inspira y no transforma la manera en la que ves tu vida y tu negocio…
        </p>
        <p className="text-xl leading-relaxed mb-4">
          <span className="font-bold gradient-gold">te devolvemos el 100% de tu dinero.</span>
        </p>
        <p className="italic text-lg mb-2">👉 Porque no quiero que vengas con miedo a perder, quiero que vengas con la certeza de ganar.</p>
        <p className="text-lg font-semibold text-emerald-400">Aquí el único riesgo es no estar presente.</p>
      </div>

      {/* Bonos */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center gradient-gold mb-10">🎁 Bonos Exclusivos</h3>
        <p className="text-center text-lg text-gray-300 mb-8">¡Solo para las primeras <span className="font-bold text-yellow-400">15 personas</span> en tomar acción!</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bono #1 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h4 className="text-2xl font-bold mb-3">🚀 Bono #1</h4>
            <p className="text-lg leading-relaxed">
              Acceso a un <span className="font-bold">Zoom grupal</span> con{" "}
              <span className="text-pink-400">Mónica Bustamante</span>, coach en mentalidad e inteligencia emocional. 
              Transforma tu forma de pensar, rompe bloqueos y acelera tu crecimiento personal.
            </p>
          </div>

          {/* Bono #2 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h4 className="text-2xl font-bold mb-3">💼 Bono #2</h4>
            <p className="text-lg leading-relaxed">
              Un <span className="font-bold">Zoom grupal de Marketing y Ventas</span> con{" "}
              <span className="text-yellow-400">Fernanda Caicedo</span> y{" "}
              <span className="text-emerald-400">Diana Escobar</span>, donde aprenderás estrategias prácticas para escalar tu negocio y convertir contactos en clientes fieles.
            </p>
          </div>

          {/* Beneficio VIP */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 md:col-span-2 hover:scale-105 transition">
            <h4 className="text-2xl font-bold mb-3">👑 Beneficio VIP</h4>
            <p className="text-lg leading-relaxed">
              Tendrás un <span className="font-bold">espacio VIP</span> en el evento presencial, con ventajas y atención exclusiva.
            </p>
          </div>
        </div>

        {/* Extra mensaje */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-4">
            ✨ Y si te quedas por fuera de esas 15 personas… no te preocupes, porque igual formarás parte de nuestra{" "}
            <span className="font-bold bg-gradient-to-br from-emerald-300 to-emerald-600 bg-clip-text text-transparent">comunidad privada</span>, donde seguiremos compartiendo valor y acompañándote en tu proceso de transformación.
          </p>
          <p className="text-2xl font-bold text-yellow-400 animate-pulse">
            ⚡ Decide rápido y asegura tu lugar
          </p>
        </div>

        {/* Información de ticket */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl bg-gradient-to-br from-emerald-300 to-emerald-600 bg-clip-text text-transparent font-bold">Reserva ya tu entrada.</h3>
        <p className="text-xl gradient-gold font-bold">
          $80.000 <span className="text-xl bg-gradient-to-br from-emerald-300 to-emerald-600 bg-clip-text text-transparent">(Preventa hasta el 5 de septiembre)</span>
        </p>
      </div>

        {/* Sección WhatsApp */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-lg text-gray-700">
          <RiWhatsappFill className="text-emerald-600 text-2xl" />
          <span className="text-white font-bold">Te esperamos en WhatsApp</span>
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
      </div>
    </section>
  );
}

import { RiInstagramFill, RiWhatsappFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Sección 1: Sobre el evento */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Conferencia Mónica Bustamante, Diana Escobar y Fernanda Caicedo</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Un espacio para reconectar contigo misma, despertar tu poder interior y liderar tu vida y tu negocio con amor propio, estrategias de marketing y ventas auténticas.
          </p>
        </div>

        {/* Sección 2: Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <RiMapPin2Fill className="text-yellow-300" />
              Cali, Colombia
            </li>
            <li className="flex items-center gap-2">
              <RiMailFill className="text-yellow-300" />
              contacto@monicabustamante.com
            </li>
            <li className="flex items-center gap-2">
              <RiWhatsappFill className="text-yellow-300" />
              +57 3245145642
            </li>
          </ul>
        </div>

        {/* Sección 3: Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Síguenos en redes sociales</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/monica_bustamante_coach"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-2 rounded-full hover:scale-110 transition-transform"
              aria-label="Instagram Mónica Bustamante"
            >
              <RiInstagramFill className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/diana.fernanda2/?igsh=MW8weG83dnUwNm84NA%3D%3D&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-2 rounded-full hover:scale-110 transition-transform"
              aria-label="Instagram Diana Escobar"
            >
              <RiInstagramFill className="text-2xl" />
            </a>
            <a
              href="https://api.whatsapp.com/message/P7QXQVX4IAQGO1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-2 rounded-full hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <RiWhatsappFill className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="bg-purple-800 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} - 2025 Conferencia Mónica Bustamante, Diana Escobar y Fernanda Caicedo — Todos los derechos reservados.
      </div>
    </footer>
  );
}

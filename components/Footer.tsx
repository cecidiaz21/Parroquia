const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <p>Avenida El Golf 155</p>
            <p>Las Condes, Santiago</p>
            <p>Chile</p>
            <p className="mt-2">Teléfono: +56 2 2222 3333</p>
            <p>Email: contacto@parroquiansa.cl</p>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horario de Misas</h3>
            <p>Lunes a Viernes: 9:00 y 19:00</p>
            <p>Sábado: 19:00</p>
            <p>Domingo: 10:00, 12:00 y 19:00</p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre-nosotros" className="hover:text-sky transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/donaciones" className="hover:text-sky transition">
                  Donaciones
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-sky transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Parroquia Nuestra Señora de los Ángeles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
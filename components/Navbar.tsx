import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-navy text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold">NSA</span>
          </Link>

          {/* Enlaces de navegación */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-sky transition">
              Inicio
            </Link>
            <Link href="/sobre-nosotros" className="hover:text-sky transition">
              Sobre Nosotros
            </Link>
            <Link href="/historia-asuncionista" className="hover:text-sky transition">
              Historia Asuncionista
            </Link>
            <Link href="/galeria" className="hover:text-sky transition">
              Galería
            </Link>
            <Link href="/donaciones" className="hover:text-sky transition">
              Donaciones
            </Link>
            <Link href="/contacto" className="hover:text-sky transition">
              Contacto
            </Link>
            <Link href="/login" className="text-sky hover:text-white transition">
              Acceso Empleados
            </Link>
          </div>

          {/* Menú móvil (se implementará la lógica después) */}
          <button className="md:hidden p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

npm install
npm run dev
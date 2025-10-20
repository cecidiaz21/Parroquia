import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parroquia Nuestra Señora de los Ángeles - El Golf</title>
        <meta name="description" content="Bienvenidos a la Parroquia Nuestra Señora de los Ángeles, ubicada en El Golf, Santiago de Chile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        {/* Banner Principal */}
        <div className="relative h-[60vh] w-full">
          <Image
            src="/images/church-banner.jpg"
            alt="Parroquia Nuestra Señora de los Ángeles"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Parroquia Nuestra Señora de los Ángeles
              </h1>
              <p className="text-xl md:text-2xl">
                Comunidad Asuncionista de El Golf
              </p>
            </div>
          </div>
        </div>

        {/* Presentación */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-navy mb-8">Bienvenidos a Nuestra Comunidad</h2>
            <p className="text-lg text-gray-700 mb-8">
              La Parroquia Nuestra Señora de los Ángeles es un espacio de encuentro y oración
              donde todos son bienvenidos. Nuestra misión es servir a la comunidad y compartir
              la palabra de Dios a través de la fe y el servicio.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/sobre-nosotros" className="bg-navy text-white px-6 py-3 rounded-lg hover:bg-sky transition">
                Conócenos más
              </Link>
            </div>
          </div>
        </section>

        {/* Enlaces Asuncionistas */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-navy mb-8 text-center">Historia Asuncionista</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="https://asuncionistas.cl" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-navy mb-4">Asuncionistas en Chile</h3>
                <p className="text-gray-600">Conoce nuestra historia y presencia en Chile</p>
              </a>
              <a 
                href="https://assomption.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-navy mb-4">Asuncionistas en Francia</h3>
                <p className="text-gray-600">Explora nuestros orígenes en Francia</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
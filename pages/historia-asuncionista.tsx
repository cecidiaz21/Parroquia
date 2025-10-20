import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HistoriaAsuncionista() {
  return (
    <>
      <Head>
        <title>Historia Asuncionista - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Conoce la historia de los Asuncionistas en Chile y el mundo" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy mb-8 text-center">
          Historia Asuncionista
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-navy">
              Los Asuncionistas en Chile
            </h2>
            <p className="text-gray-700">
              La presencia asuncionista en Chile comenzó en [año], cuando los primeros
              religiosos llegaron al país con la misión de evangelizar y servir a la
              comunidad. Desde entonces, han dejado una huella significativa en la
              educación y la pastoral social.
            </p>
            <Link 
              href="https://asuncionistas.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
            >
              Conoce más sobre los Asuncionistas en Chile
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/asuncionistas-chile.jpg"
              alt="Asuncionistas en Chile"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="order-2 md:order-1 relative h-[400px]">
            <Image
              src="/images/asuncionistas-francia.jpg"
              alt="Asuncionistas en Francia"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-semibold text-navy">
              Orígenes en Francia
            </h2>
            <p className="text-gray-700">
              La Congregación de los Agustinos de la Asunción fue fundada en Francia
              por el Padre Emmanuel d'Alzon en 1845. Su visión era crear una comunidad
              religiosa dedicada a la educación, la prensa católica y el ecumenismo.
            </p>
            <Link 
              href="https://assomption.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
            >
              Descubre los orígenes en Francia
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-navy mb-6 text-center">
            Nuestra Misión Asuncionista
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Fe y Razón</h3>
              <p className="text-gray-700">
                Buscamos el diálogo entre la fe y la razón, promoviendo
                una educación integral y una formación cristiana sólida.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Comunidad</h3>
              <p className="text-gray-700">
                Construimos comunidades vivas donde se vive y celebra
                la fe en un espíritu de familia y fraternidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Servicio</h3>
              <p className="text-gray-700">
                Nos comprometemos con el servicio a los más necesitados
                y la construcción de una sociedad más justa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
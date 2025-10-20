import Head from 'next/head';
import Image from 'next/image';

export default function SobreNosotros() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Conoce más sobre nuestra parroquia y nuestra misión en la comunidad de El Golf" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Sección Principal */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-navy mb-8 text-center">
            Nuestra Parroquia
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                La Parroquia Nuestra Señora de los Ángeles, ubicada en el corazón de El Golf,
                ha sido un faro espiritual para la comunidad desde su fundación. Nuestra misión
                es ser un espacio acogedor donde todos puedan encontrar paz, orientación y
                crecimiento espiritual.
              </p>
              <p className="text-lg text-gray-700">
                Como parte de la comunidad Asuncionista, nos dedicamos a servir a Dios y a
                nuestros hermanos, promoviendo los valores del Evangelio y el compromiso social
                con nuestra comunidad.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/church-interior.jpg"
                alt="Interior de la Parroquia"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Nuestra Misión */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-navy mb-6 text-center">
            Nuestra Misión
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-navy mb-4">Fe</h3>
                <p className="text-gray-700">
                  Fortalecer la fe de nuestra comunidad a través de la oración,
                  los sacramentos y la formación espiritual.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-navy mb-4">Comunidad</h3>
                <p className="text-gray-700">
                  Crear un espacio acogedor donde todos se sientan parte de
                  nuestra familia parroquial.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-navy mb-4">Servicio</h3>
                <p className="text-gray-700">
                  Servir a nuestra comunidad a través de obras de caridad y
                  programas sociales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Horarios y Actividades */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy mb-6 text-center">
            Horarios y Actividades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Misas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Lunes a Viernes: 9:00 y 19:00</li>
                <li>Sábado: 19:00</li>
                <li>Domingo: 10:00, 12:00 y 19:00</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Actividades Pastorales</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Catequesis de Primera Comunión: Sábados 10:00</li>
                <li>Confirmación: Viernes 18:00</li>
                <li>Grupo de Oración: Martes 20:00</li>
                <li>Pastoral Social: Jueves 17:00</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Equipo Pastoral */}
        <section>
          <h2 className="text-3xl font-semibold text-navy mb-6 text-center">
            Nuestro Equipo Pastoral
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/parroco.jpg"
                  alt="Párroco"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy">Padre Juan Pablo Martínez</h3>
              <p className="text-gray-700">Párroco</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/vicario.jpg"
                  alt="Vicario"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy">Padre Pedro Sánchez</h3>
              <p className="text-gray-700">Vicario Parroquial</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/secretaria.jpg"
                  alt="Secretaria"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy">María González</h3>
              <p className="text-gray-700">Secretaria Parroquial</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
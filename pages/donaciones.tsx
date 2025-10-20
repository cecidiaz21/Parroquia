import Head from 'next/head';

export default function Donaciones() {
  return (
    <>
      <Head>
        <title>Donaciones - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Colabora con nuestra parroquia a través de donaciones" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy mb-8 text-center">
          Donaciones
        </h1>

        <div className="mb-12">
          <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Tu generosidad nos ayuda a mantener viva nuestra misión y a servir mejor a
            nuestra comunidad. Todas las donaciones son utilizadas de manera transparente
            para el beneficio de nuestra parroquia y sus obras sociales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Campaña de Navidad */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block">🎁</span>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Campaña de Navidad para Empleados
              </h3>
              <p className="text-gray-700 mb-6">
                Ayúdanos a brindar una feliz Navidad a nuestro personal parroquial
                a través de cajas navideñas.
              </p>
            </div>
            <a
              href="https://www.webpay.cl/navidad-empleados"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary block text-center"
            >
              Donar ahora
            </a>
          </div>

          {/* Obras Pastorales */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block">🕯️</span>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Apoyo a Obras Pastorales
              </h3>
              <p className="text-gray-700 mb-6">
                Contribuye a la formación cristiana, catequesis y programas
                para jóvenes y adultos.
              </p>
            </div>
            <a
              href="https://www.webpay.cl/obras-pastorales"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary block text-center"
            >
              Donar ahora
            </a>
          </div>

          {/* Mantenimiento */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block">🛠️</span>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Mantenimiento del Templo
              </h3>
              <p className="text-gray-700 mb-6">
                Apoya el mantenimiento, limpieza, iluminación y
                restauraciones necesarias.
              </p>
            </div>
            <a
              href="https://www.webpay.cl/mantenimiento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary block text-center"
            >
              Donar ahora
            </a>
          </div>
        </div>

        {/* Advertencia de seguridad */}
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-center text-gray-800">
            <strong>⚠️ Importante:</strong> Todas las donaciones se realizan en un sitio externo
            seguro (WebPay/Mercado Pago). Nunca ingreses tus datos en sitios no oficiales.
          </p>
        </div>

        {/* Información adicional */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-navy mb-4">
            Otras formas de ayudar
          </h2>
          <p className="text-gray-700">
            También puedes realizar transferencias bancarias o donar presencialmente
            en nuestra oficina parroquial durante el horario de atención.
          </p>
          <div className="mt-4 inline-block text-left">
            <p className="text-gray-700">
              <strong>Datos bancarios:</strong><br />
              Banco: Banco Estado<br />
              Cuenta: Corriente<br />
              N°: 123456789<br />
              Nombre: Parroquia Nuestra Señora de los Ángeles<br />
              RUT: XX.XXX.XXX-X<br />
              Email: donaciones@parroquiansa.cl
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
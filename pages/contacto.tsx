import Head from 'next/head';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Contacto() {
  const mapCenter = {
    lat: -33.4133, // Coordenadas de El Golf, Las Condes
    lng: -70.5995
  };

  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementará la lógica de envío del formulario
    alert('Mensaje enviado con éxito');
  };

  return (
    <>
      <Head>
        <title>Contacto - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Contáctanos - Parroquia Nuestra Señora de los Ángeles" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy mb-8 text-center">
          Contacto
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="form-label">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  required
                  className="form-input"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto y mapa */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Información de contacto
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Dirección:</strong><br />
                  Avenida El Golf 155, Las Condes<br />
                  Santiago, Chile
                </p>
                <p>
                  <strong>Teléfono:</strong><br />
                  +56 2 2222 3333
                </p>
                <p>
                  <strong>Email:</strong><br />
                  contacto@parroquiansa.cl
                </p>
                <p>
                  <strong>Horario de oficina:</strong><br />
                  Lunes a Viernes: 9:00 - 13:00 y 15:00 - 19:00<br />
                  Sábado: 9:00 - 13:00
                </p>
              </div>
            </div>

            {/* Mapa de Google */}
            <LoadScript googleMapsApiKey="TU_API_KEY">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={mapCenter}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </>
  );
}
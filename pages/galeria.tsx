import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/images/galeria/iglesia-1.jpg', alt: 'Fachada de la iglesia' },
    { src: '/images/galeria/iglesia-2.jpg', alt: 'Interior de la iglesia' },
    { src: '/images/galeria/iglesia-3.jpg', alt: 'Altar mayor' },
    { src: '/images/galeria/iglesia-4.jpg', alt: 'Capilla lateral' },
    { src: '/images/galeria/iglesia-5.jpg', alt: 'Vitral principal' },
    { src: '/images/galeria/iglesia-6.jpg', alt: 'Jardín parroquial' },
  ];

  return (
    <>
      <Head>
        <title>Galería - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Galería de imágenes de nuestra parroquia" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy mb-8 text-center">
          Galería de Imágenes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 cursor-pointer hover:opacity-90 transition"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Modal para vista ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
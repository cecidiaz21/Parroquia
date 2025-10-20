import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState('bautismos');
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo
  const sacramentoData = {
    bautismos: [
      { id: 1, nombre: 'Juan Pérez', fecha: '2025-05-15', lugar: 'Parroquia NSA', observaciones: 'Padrinos: María y Pedro' },
      { id: 2, nombre: 'Ana García', fecha: '2025-06-20', lugar: 'Parroquia NSA', observaciones: 'Ceremonia privada' }
    ],
    comuniones: [
      { id: 1, nombre: 'Carlos López', fecha: '2025-04-10', lugar: 'Parroquia NSA', observaciones: 'Primera Comunión' },
      { id: 2, nombre: 'María Silva', fecha: '2025-04-10', lugar: 'Parroquia NSA', observaciones: 'Grupo A' }
    ],
    confirmaciones: [
      { id: 1, nombre: 'Roberto Torres', fecha: '2025-08-25', lugar: 'Parroquia NSA', observaciones: 'Confirmación adultos' },
      { id: 2, nombre: 'Laura Muñoz', fecha: '2025-08-25', lugar: 'Parroquia NSA', observaciones: 'Grupo jóvenes' }
    ],
    matrimonios: [
      { id: 1, nombre: 'Felipe y Carolina', fecha: '2025-09-30', lugar: 'Parroquia NSA', observaciones: 'Ceremonia 17:00' },
      { id: 2, nombre: 'Diego y Valentina', fecha: '2025-10-15', lugar: 'Parroquia NSA', observaciones: 'Ceremonia 12:00' }
    ]
  };

  const generatePDF = (registro: any) => {
    // Aquí se implementará la generación del PDF con jsPDF
    alert('Generando certificado para ' + registro.nombre);
  };

  const filteredData = sacramentoData[currentSection].filter(registro =>
    registro.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Panel Administrativo - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Panel administrativo para gestión de sacramentos" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-navy">
            Panel Administrativo
          </h1>
          <button
            onClick={() => router.push('/login')}
            className="btn btn-outline"
          >
            Cerrar sesión
          </button>
        </div>

        {/* Navegación entre secciones */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {Object.keys(sacramentoData).map((seccion) => (
            <button
              key={seccion}
              onClick={() => setCurrentSection(seccion)}
              className={`p-6 rounded-lg shadow-md text-center transition ${
                currentSection === seccion
                  ? 'bg-navy text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h2 className={`text-xl font-semibold ${
                currentSection === seccion ? 'text-white' : 'text-navy'
              }`}>
                {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
              </h2>
              <p className={`mt-2 ${
                currentSection === seccion ? 'text-sky-200' : 'text-gray-600'
              }`}>
                {sacramentoData[seccion].length} registros
              </p>
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input max-w-md"
          />
        </div>

        {/* Tabla de registros */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lugar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Observaciones
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((registro) => (
                <tr key={registro.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {registro.nombre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {registro.fecha}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {registro.lugar}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {registro.observaciones}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => generatePDF(registro)}
                      className="text-sky hover:text-navy"
                    >
                      Generar PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
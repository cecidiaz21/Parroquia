import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de autenticación básica
    if (email === 'admin@parroquiansa.cl' && password === 'admin123') {
      router.push('/admin-dashboard');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <>
      <Head>
        <title>Acceso Empleados - Parroquia Nuestra Señora de los Ángeles</title>
        <meta name="description" content="Portal de acceso para empleados" />
      </Head>

      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy">
              Portal de Empleados
            </h1>
            <p className="text-gray-600 mt-2">
              Ingresa tus credenciales para acceder
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Ingresar
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            ¿Olvidaste tu contraseña? Contacta al administrador
          </p>
        </div>
      </div>
    </>
  );
}
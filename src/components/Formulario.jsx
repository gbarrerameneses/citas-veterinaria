import { useState, useEffect } from "react";

function Formulario({ pacientes, setPacientes}) { // Pasamos las props
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {

      setError(true);
      return
    }

    setError(false);

    // Objeto de Paciente 
    const objetoPaciente= {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    console.log(objetoPaciente);

    setPacientes([...pacientes, objetoPaciente])
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Añade Pacientes{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg p-5 my-10 mx-5" action="">
        {error && (
          <div className="bg-red-800 font-bold text-white text-center p-3 my-3 rpunded-md uppercase">
            <p>Todos los campos son obligatorios</p>
          </div>
          )}
        <div className="mt-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta
          </label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta
          </label>
          <textarea
            placeholder="Describe los síntomas"
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 mt-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
}

export default Formulario;

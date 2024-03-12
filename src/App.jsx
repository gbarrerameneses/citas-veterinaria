import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // [] Para los pacientes y traigo lo que tengo en localStorage 
  //sin useEffect porque ya no es necesario en nuevas versiones
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes') ?? []));

  // const [pacientes, setPacientes] = useState([]); // [] Para los pacientes sin localStorage
  const [paciente, setPaciente] = useState({}); // {} Para el paciente

  // traigo lo que teno en localStorage
  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const paceintesLS = JSON.parse(localStorage.getItem('pacientes') ?? []);
  //     setPacientes(paceintesLS);
  //   }
  //   obtenerLS()
  // }, []);

  // localStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    // console.log('Eliminando paciente', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes} // Prop
        paciente={paciente} // Objeto de paciente
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

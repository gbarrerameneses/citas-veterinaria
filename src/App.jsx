import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]); // [] Para los pacientes
  const [paciente, setPaciente] = useState({}); // {} Para el paciente

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes} // Prop
        paciente={paciente} // Objeto de paciente
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}

export default App;

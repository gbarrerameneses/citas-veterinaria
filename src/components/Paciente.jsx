const Paciente = ({paciente}) => {

  // También se puede hacer por destructuring
  // const { nombre, propietario, email, fecha, sintomas } = paciente 

  return (
    <div className="m-10 bg-white shadow-md rounded p-5 mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propieario: <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
        {paciente.sintomas}
        </span>
      </p>
    </div>
  );
};

export default Paciente;

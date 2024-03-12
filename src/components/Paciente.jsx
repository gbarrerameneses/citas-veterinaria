import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // Destructuring
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  // Alerta 
  const handleEliminar = () =>{
    Swal.fire({
        title: `¿Estás seguro de eliminar la cita del paciente ${nombre}?`,
        text: "No es posible puedes revertir esta acción.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarPaciente(id);  //llama el prop y enviar el id
            Swal.fire(
            'Eliminado!',
            'Tu cita se ha eliminado.',
            'success'
            )
        }
    })
}

  return (
    <div className="m-10 bg-white shadow-md rounded p-5 mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propieario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      {/* Buttons */}
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => handleEliminar()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

import React from "react";

const Paciente = () => {
  return (
    <div className="m-10 bg-white shadow-md rounded p-5 mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propieario: <span className="font-normal normal-case">Gus</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">email@email.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">10 Diciembre de 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae labore
          ipsum exercitationem! Doloribus repellendus sunt unde ipsa sequi rerum
          dignissimos nemo ab laboriosam. Labore ut, dolore maxime cupiditate
          aliquid fuga.
        </span>
      </p>
    </div>
  );
};

export default Paciente;

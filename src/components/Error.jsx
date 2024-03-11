const Error = ({mensaje}) => { // Prop mensaje desde componente padre Formulario

  return (
    <div>
       <div className="bg-red-800 font-bold text-white text-center p-3 my-3 rpunded-md uppercase">
            {/* Mostramos prop mensaje */}
            <p>{mensaje}</p>
          </div>
    </div>
  )
}

export default Error

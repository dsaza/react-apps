import { useState } from 'react'

export default function Patient ({ patient, deletePatient }) {
  const { _id, petName, ownerName, ownerEmail, dischargeDate, symptoms } = patient
  const [details, setDetails] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const toggleDetails = () => {
    setDetails(!details)
    setDeleting(false)
  }
  const handleDeletePatient = id => deletePatient(id)

  return (
    <li className='mb-5 last:mb-0'>
      <div className='bg-white shadow-md rounded-xl'>
        <div className='flex justify-between p-5'>
          <div className='inline-flex items-center'>
            <span className='w-[40px] h-[40px] bg-indigo-600 text-white font-bold rounded-full inline-flex items-center justify-center text-xl leading-none mr-4'>{ownerName.slice(0, 1).toUpperCase()}</span>
            <div>
              <p className='leading-5 font-bold'>{petName}</p>
              <p className='leading-5 text-gray-500'>{ownerEmail}</p>
            </div>
          </div>
          <div className='inline-flex items-center'>
            <div className='text-right mr-6'>
              <p className='leading-5 text-gray-500 text-sm'>{dischargeDate}</p>
            </div>
            <button type='button' className={`bg-white hover:bg-indigo-50 ${details && 'bg-indigo-50'} rounded-md font-semibold h-[40px] w-[100px] border border-indigo-600 text-indigo-600 text-center leading-none`} onClick={toggleDetails}>Ver más</button>
          </div>
        </div>
        {details && (
          <div className='p-5 text-sm'>
            <div className='grid grid-cols-2 gap-x-8 gap-y-3'>
              <div>
                <p className='font-bold'>Nombre de la mascota</p>
                <p>{petName}</p>
              </div>
              <div>
                <p className='font-bold'>Nombre del propietario</p>
                <p>{ownerName}</p>
              </div>
              <div>
                <p className='font-bold'>Correo electrónico</p>
                <p>{ownerEmail}</p>
              </div>
              <div>
                <p className='font-bold'>Fecha de alta</p>
                <p>{dischargeDate}</p>
              </div>
            </div>
            <div className='mt-3'>
              <p className='font-bold'>Síntomas</p>
              <p>{symptoms}</p>
            </div>
            {
              deleting
                ? (
                  <>
                    <p className='mt-8 text-right font-bold'>¿Estás segur@ de eliminar esta cita?</p>
                    <div className='flex justify-end mt-3'>
                      <button
                        type='button'
                        className='px-6 py-2 text-center bg-white hover:bg-red-500 border-2 rounded-lg text-red-500 hover:text-white font-bold border-red-500'
                        onClick={() => { handleDeletePatient(_id) }}
                      >Si eliminar
                      </button>
                      <button
                        type='button'
                        className='px-6 py-2 text-center bg-white hover:bg-green-500 border-2 rounded-lg text-green-500 hover:text-white font-bold border-green-500 ml-3'
                        onClick={() => { setDeleting(false) }}
                      >No eliminar
                      </button>
                    </div>
                  </>)
                : (
                  <div className='flex justify-end mt-8'>
                    <button
                      type='button'
                      className='px-6 py-2 text-center bg-white hover:bg-red-500 border-2 rounded-lg text-red-500 hover:text-white font-bold border-red-500'
                      onClick={() => { setDeleting(true) }}
                    >Eliminar
                    </button>
                  </div>)
            }
          </div>
        )}
      </div>
    </li>
  )
}

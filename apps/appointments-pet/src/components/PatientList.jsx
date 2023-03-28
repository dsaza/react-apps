import Patient from './Patient'

export default function PatientList ({ patients, deletePatient }) {
  return (
    <div className='lg:w-1/2 xl:w-3/5 2xl:w-2/3'>
      <h2 className='text-lg'>
        Administra tus
        <span className='text-indigo-600 font-bold'>pacientes y citas</span>
      </h2>
      <div className='mt-6'>
        {
          patients.length > 0
            ? (
              <ul>
                {patients.map(patient => (
                  <Patient key={patient._id} patient={patient} deletePatient={deletePatient} />
                ))}
              </ul>)
            : (
              <div className='bg-white shadow-md rounded-xl p-5'>
                <p className='font-bold'>No hay pacientes <span className='text-indigo-600'>empieza creando uno.</span></p>
              </div>)
        }
      </div>
    </div>
  )
}

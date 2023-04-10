import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

export default function App () {
  const [patients, setPatients] = useState(() => {
    const patientsStorage = window.localStorage.getItem('patientsListReactApp')
      ? JSON.parse(window.localStorage.getItem('patientsListReactApp')).data
      : []

    return patientsStorage
  })

  const addPatient = data => setPatients([...patients, data])
  const deletePatient = id => setPatients(patients.filter(patient => patient._id !== id))

  useEffect(() => {
    window.localStorage.setItem('patientsListReactApp', JSON.stringify({ data: patients }))
    window.scrollTo(0, 0)
  }, [patients])

  return (
    <>
      <div className='container mx-auto py-10 px-4 '>
        <Header />
        <div className='block lg:flex'>
          <Form addPatient={addPatient} />
          <PatientList patients={patients} deletePatient={deletePatient} />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

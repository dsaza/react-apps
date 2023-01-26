import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

export default function App() {
	
	const patientsStorage = localStorage.getItem('patientsListReactApp')
		? JSON.parse(localStorage.getItem('patientsListReactApp')).data
		: []

	const [patients, setPatients] = useState(patientsStorage)

	const addPatient = data => setPatients([...patients, data])
	const deletePatient = id => setPatients(patients.filter(patient => patient._id !== id))

	useEffect(() => {
		localStorage.setItem('patientsListReactApp', JSON.stringify({ data: patients }))
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

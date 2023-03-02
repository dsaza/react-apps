import { showError, hideErrors } from '../helpers/alerts'
import { useForm } from '../hooks/useForm'

export default function Form({ addPatient }) {
	const { formdata, updateFormdata, clearFormdata, validateForm } = useForm()
	const { petName, ownerName, ownerEmail, dischargeDate, symptoms } = formdata

	const handleChangeInput = evt => {
		const { name, value } = evt.target
		updateFormdata({ [name]: value })
	}

	const handleSubmit = evt => {
		evt.preventDefault()

		const validation = validateForm()

		if (!validation.allowed) {
			showError(validation.message)
			return
		}

		hideErrors()

		addPatient({
			_id: Date.now(),
			...formdata,
		})

		clearFormdata()
	}

	return (
		<div className="mb-10 lg:mb-0 lg:pr-8 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
			<h2 className="text-lg">
				Añade pacientes y {''}
				<span className="text-indigo-600 font-bold">administralos</span>
			</h2>
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-8 px-5 mt-6 sticky top-5">
				<div className="mb-10">
					<div className="mb-5 last:mb-0">
						<label>
							<span className="block text-gray-700 font-bold mb-2">Nombre de la mascota</span>
							<input
								type="text"
								className="border border-gray-200 focus:border-indigo-600 w-full p-2 rounded-md placeholder-gray-400"
								placeholder="Lia"
								name="petName"
								value={petName}
								onChange={handleChangeInput}
							/>
						</label>
					</div>
					<div className="mb-5 last:mb-0">
						<label>
							<span className="block text-gray-700 font-bold mb-2">Nombre del propietario</span>
							<input
								type="text"
								className="border border-gray-200 focus:border-indigo-600 w-full p-2 rounded-md placeholder-gray-400"
								placeholder="Anyela Lemus"
								name="ownerName"
								value={ownerName}
								onChange={handleChangeInput}
							/>
						</label>
					</div>
					<div className="mb-5 last:mb-0">
						<label>
							<span className="block text-gray-700 font-bold mb-2">Correo electrónico</span>
							<input
								type="email"
								className="border border-gray-200 focus:border-indigo-600 w-full p-2 rounded-md placeholder-gray-400"
								placeholder="anyela-lemus@dominio.com"
								name="ownerEmail"
								value={ownerEmail}
								onChange={handleChangeInput}
							/>
						</label>
					</div>
					<div className="mb-5 last:mb-0">
						<label>
							<span className="block text-gray-700 font-bold mb-2">Fecha de alta</span>
							<input
								type="date"
								className="border border-gray-200 focus:border-indigo-600 w-full p-2 rounded-md placeholder-gray-400 text-gray-400"
								name="dischargeDate"
								value={dischargeDate}
								onChange={handleChangeInput}
							/>
						</label>
					</div>
					<div className="mb-5 last:mb-0">
						<label>
							<span className="block text-gray-700 font-bold mb-2">Síntomas</span>
							<textarea
								className="border border-gray-200 focus:border-indigo-600 w-full p-2 rounded-md placeholder-gray-400 resize-none"
								rows="6"
								placeholder="Describe los síntomas..."
								name="symptoms"
								value={symptoms}
								onChange={handleChangeInput}
							></textarea>
						</label>
					</div>
				</div>
				<div className="mb-0">
					<button type="submit" className="bg-indigo-600 hover:bg-indigo-700 transition-all w-full text-white p-3 rounded-xl font-bold">Agregar paciente</button>
				</div>
			</form>
		</div>
	)

}

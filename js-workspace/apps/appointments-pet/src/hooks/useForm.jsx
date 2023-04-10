import { useState } from 'react'

export function useForm () {
  const initalFormdata = {
    petName: '',
    ownerName: '',
    ownerEmail: '',
    dischargeDate: '',
    symptoms: ''
  }

  const [formdata, setFormdata] = useState(initalFormdata)

  const clearFormdata = () => setFormdata(initalFormdata)

  const updateFormdata = value => setFormdata({ ...formdata, ...value })

  const validateForm = () => {
    const messages = {
      petName: 'Por favor escribe el nombre de la mascota',
      ownerName: 'Por favor escribe el nombre del propietario',
      ownerEmail: 'Por favor escribe un correo electrónico',
      dischargeDate: 'Por favor escribe la fecha de alta',
      symptoms: 'Por favor escribe los síntomas'
    }

    const dataEmpty = Object.keys(formdata).filter(key => formdata[key].trim() === '')

    if (dataEmpty.length < 1) return { allowed: true }

    return {
      allowed: false,
      message: messages[dataEmpty[0]]
    }
  }

  return {
    formdata,
    updateFormdata,
    clearFormdata,
    validateForm
  }
}

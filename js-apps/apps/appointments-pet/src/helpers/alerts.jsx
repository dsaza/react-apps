import { toast } from 'react-toastify'

const defaultConfig = {
  position: 'bottom-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored'
}

export const showError = (message, config = {}) => toast.error(message, { ...defaultConfig, ...config })

export const hideErrors = () => toast.dismiss()

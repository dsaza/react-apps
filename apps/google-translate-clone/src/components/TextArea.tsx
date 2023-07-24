import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}

const commonStyles = { border: 0, height: '200px', outline: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  return loading === true ? 'Traduciendo...' : 'Traducción'
}

export function TextArea ({ loading, type, value, onChange }: Props) {
  const styles = type === SectionType.To
    ? { ...commonStyles, backgroundColor: '#f5f5f5' }
    : { ...commonStyles, border: '1px solid #f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}

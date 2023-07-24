import { Form } from 'react-bootstrap'
import { SectionType, type FromLanguage, type Language } from '../types.d'
import { AUTO_LANG, SUPPORTED_LANGS } from '../constants'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export function LanguageSelector ({ type, value, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANG}>Detectar idioma</option>}

      {Object.entries(SUPPORTED_LANGS).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}

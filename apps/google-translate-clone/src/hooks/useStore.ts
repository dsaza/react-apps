import { useReducer } from 'react'
import { AUTO_LANG } from '../constants'
import { type Language, type Action, type State, type FromLanguage } from '../types.d'

const initialState: State = {
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGS') {
    if (state.fromLang === AUTO_LANG) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      fromLang: state.toLang,
      toLang: state.fromLang,
      loading,
      result: ''
    }
  }

  if (type === 'SET_FROM_LANG') {
    if (state.fromLang === action.payload) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      fromLang: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_TO_LANG') {
    if (state.toLang === action.payload) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      toLang: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''

    return {
      ...state,
      fromText: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }

  return state
}

export function useStore () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const interchangeLangs = () => {
    dispatch({ type: 'INTERCHANGE_LANGS' })
  }

  const setFromLang = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANG', payload })
  }

  const setToLang = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANG', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    ...state,
    interchangeLangs,
    setFromLang,
    setToLang,
    setFromText,
    setResult
  }
}

import api from '../utils/api'

export const fetchPoke = async () => {
  const data = await api.get('pokemon/ditto/')
  return data
}

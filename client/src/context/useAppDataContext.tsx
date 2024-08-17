import { useContext } from 'react'
import { AppDataContext } from './AppDataProvider'

const useAppDataContext = () => {
  return useContext(AppDataContext)
}

export default useAppDataContext
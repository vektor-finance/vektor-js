import axios, { AxiosError } from 'axios'

// API Errors
export const isAPIError = (payload: any): payload is AxiosError<any> => axios.isAxiosError(payload)

import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingcycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  axios.post(`${BASE_URL}/billingcycles`, values)
    .then( resp => {
      toastr.success('Sucesso', 'Operação realizada com sucesso.' )
    })
    .catch( respError => {
      respError.response.data.errors.forEach( error => toastr.error('Erro', error ) )
    })

  return {
    type: 'TEMP'
  }
}
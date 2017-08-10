import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingcycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}
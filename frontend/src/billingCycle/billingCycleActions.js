import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingcycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return dispatch => {  
    axios.post(`${BASE_URL}/billingcycles`, values)
      .then( resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.' )
        dispatch([
          resetForm('billingCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch( respError => {
        respError.response.data.errors.forEach( error => toastr.error('Erro', error ) )
      })
  }
}

export function showUpdate( billingCycle ) {
  return [
    selectTab('tabUpdate'),
    showTabs('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}
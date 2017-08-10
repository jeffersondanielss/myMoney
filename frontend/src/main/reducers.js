import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as ToastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: ToastrReducer
})


export default rootReducer
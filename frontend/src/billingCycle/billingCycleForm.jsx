import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

  calculeSummary() {
    const sum = (total, atual) => total + atual
    return {
      sumOfCredits: this.props.credits.map( credit => +credit.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map( debt => +debt.value || 0).reduce(sum)
    }
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props
    const { sumOfCredits, sumOfDebts } = this.calculeSummary()
    return (
      <form role='form' onSubmit={ handleSubmit }>
        <div className='box-body'>
          <Field name='name' component={ LabelAndInput } label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={ readOnly } />
          <Field name='month' component={ LabelAndInput } label='Mes' cols='12 4' placeholder='Informe o mês' type='number' readOnly={ readOnly } />
          <Field name='year' component={ LabelAndInput } label='Ano' cols='12 4' placeholder='Informe o ano' type='number' readOnly={ readOnly } />
          <Summary credit={ sumOfCredits } debt={ sumOfDebts } />
          <ItemList cols='12 6' readOnly={ readOnly } list={ credits } field='credits' legend='Créditos' />
          <ItemList cols='12 6' readOnly={ readOnly } list={ debts } field='debts' legend='Débitos' showStatus={true} />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{ this.props.submitLabel }</button>
          <button type='button' className='btn btn-default' onClick={ this.props.init }>Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToprops = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispathToPorps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToprops, mapDispathToPorps)(BillingCycleForm)
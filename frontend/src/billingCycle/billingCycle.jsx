import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {

  render() {

    return (
      <div>
        <ContentHeader title="Ciclo de pagamento" small="Cadastro" />
        <Content>
          Ciclos de pag
        </Content>
      </div>
    )
  }
}

export default BillingCycle
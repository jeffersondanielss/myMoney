import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
class BillingCycle extends Component {

  render() {

    return (
      <div>
        <ContentHeader title="Ciclo de pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <tabsHeader></tabsHeader>
            <tabsContent></tabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle
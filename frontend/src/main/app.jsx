import '../common/template/dependencies'
import React from 'react';

import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'

export default props => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    
    <div className="content-wrapper">
      <h1>content</h1>
    </div>

    <Footer></Footer>
  </div>
)
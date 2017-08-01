import '../common/template/dependencies'
import React from 'react';

import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'

export default props => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
  </div>
)
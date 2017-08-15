import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  changeOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { name, email } = this.props.user
    
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <li onMouseLeave={ () => this.changeOpen() } className={ `dropdown user user-menu ${ this.state.open ? 'open' : '' }` }>
            <a href="javascript:;" onClick={ () => this.changeOpen() } aria-expanded={ this.state.open ? 'true' : 'false' } data-togle='dropdown' className="dropdown-toggle">
              <img src="http://lorempixel.com/160/160/abstract" alt="user Image" className="user-image"/>
              <span className="hidden-xs">{ name }</span>
            </a>

            <ul className="dropdown-menu">
              <li className="user-header">
                <img src="http://lorempixel.com/160/160/abstract" alt="user Image" className="img-circle"/>
                <p>{ name } <small> { email } </small></p>
              </li>
              <li className="user-footer">
                <div className="pull-right">
                  <a href="#" onClick={ this.props.logout } className="btn btn-default btn-flat">Sair</a>
                </div>
              </li>
            </ul>

          </li>

        </ul>
      </div> 
    )
  }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators( { logout }, dispatch )
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Toolbar from '../components/Toolbar'
import ClinicTable from '../components/Table'
import 'normalize.css'
import '../common/layout.less'

class App extends Component {
  render () {
    return (
    <div>
    <link href="https://cdn.bootcss.com/react-bootstrap-table/3.1.3/react-bootstrap-table-all.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>

      <Header />
      <Toolbar />
      <ClinicTable />
    </div>)
  }
}

export default connect(state => ({

}))(App)

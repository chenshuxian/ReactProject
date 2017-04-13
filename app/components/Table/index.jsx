/**
 * Created at 17/04/11.
 * @Author Chen.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
var products = [{
      id: 1,
      clinic: "外科",
      name: "陈*贤"
  }, {
      id: 2,
      clinic: "内科",
      name: "王*明"
  }];

export default class ClinicTable extends Component {
  render () {
    return (<BootstrapTable data={products} striped hover>
      <TableHeaderColumn isKey dataField='id' width='10%'>*</TableHeaderColumn>
      <TableHeaderColumn dataField='clinic'>诊间</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>名字</TableHeaderColumn>
  </BootstrapTable>)
  }
}

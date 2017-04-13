/**
 * Created at 16/5/17.
 * @Author Jacky.
 * @Email
 */
import React, { Component } from 'react'
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap'
const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">公播-叫号资讯</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">外科</NavItem>
        <NavItem eventKey={2} href="#">内科</NavItem>
        <NavDropdown eventKey={3} title="妇科" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>妇科一</MenuItem>
          <MenuItem eventKey={3.2}>妇科二</MenuItem>
          <MenuItem eventKey={3.3}>妇科三</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default class Toolbar extends Component {
  render () {
    return (navbarInstance)
  }
}

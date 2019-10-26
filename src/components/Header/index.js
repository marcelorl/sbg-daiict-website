import React from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import { brandInfo, menuItems } from '../../data/header'
import Sidebar from '../Sidebar'
import { FaThList } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DropdownButton = props => (
  <Button {...props} outline color="secondary" className="text-dark" />
)

function Header() {
  return (
    <div id="wrapper" className="content border-bottom">
      <Navbar color="light" light className="m-0">
        <UncontrolledDropdown size="sm" className="dropdown-home mt-1">
          <DropdownToggle tag={DropdownButton}>
            <FaThList />
          </DropdownToggle>
          <DropdownMenu>
            {menuItems.map(i => (
              <DropdownItem className="p-0" key={i.to}>
                <li className="px-3 py-1" role="presentation">
                  <Link className="text-decoration-none text-dark" to={i.to}>
                    {i.title}
                  </Link>
                </li>
                <DropdownItem divider />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>

        <NavbarBrand href="/">
          <img
            className="brand-logo"
            src={brandInfo.logo}
            alt={brandInfo.title}
            title={brandInfo.title}
          />
          <span className="text-secondary">{brandInfo.title}</span>
        </NavbarBrand>
        <Sidebar />
      </Navbar>
    </div>
  )
}

export default Header

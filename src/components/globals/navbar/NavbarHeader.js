import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/sleflogo.svg'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'

export default class NavbarHeader extends Component {
  render () {
    const {handleNavbar} = this.props
    return <HeaderWrapper>
        <Link to="/">
            <HeaderImg src={logo} alt="SLEF" />
        </Link>
        <FaAlignRight className="toggle-icon" onClick={() => {
            handleNavbar()
          }} />
      </HeaderWrapper>
    }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainOrange};
    curser: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

const HeaderImg = styled.img`
width: 225px;
height: auto;
`
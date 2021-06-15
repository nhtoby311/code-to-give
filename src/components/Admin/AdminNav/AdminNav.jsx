import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import './AdminNav.scss'

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    height:100vh;
    position: fixed;
    background: #4cbe1b;
    border-radius: 0 25px 25px 0;
    left:0;
    top: 0;
`
const NavItem = styled(NavLink)`
    padding: 30px 50px;
    padding-right: 100px;
    cursor: pointer;
    span{
        font-size: 1.2rem;
        color: white;
    }
    &:hover{
        background: #479F21;
    }
`

export default function AdminNav(){
    return(
        <Nav>
            <NavItem exact activeClassName="active-admin-nav" to="/admin" >
                <span>Dashboard</span>
            </NavItem>
            <NavItem exact activeClassName="active-admin-nav" to="/admin/assignment" >
                <span>Assignment</span>
            </NavItem>
            <NavItem exact activeClassName="active-admin-nav" to="/admin/student" >
                <span>Student</span>
            </NavItem>
        </Nav>
    )
}
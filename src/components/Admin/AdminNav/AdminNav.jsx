import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../../../context/AuthContext'
import './AdminNav.scss'

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0;
    height:100vh;
    position: fixed;
    background: #4cbe1b;
    border-radius: 0 25px 25px 0;
    left:0;
    top: 0;
`
const NavItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const NavItem = styled(NavLink)`
    padding: 30px 50px;
    padding-right: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s;
    span{
        font-size: 1.2rem;
        color: white;
    }
    &:hover{
        background: #479F21;
    }
`

const Logout = styled.span`
    padding: 30px 50px;
    padding-right: 100px;
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    transition: background 0.3s;
    &:hover{
        background: #479F21;
    }
`

export default function AdminNav(){
    const {logout} = useContext(AuthContext)

    return(
        <Nav>
            <NavItemWrapper>
                <NavItem exact activeClassName="active-admin-nav" to="/admin" >
                    <span>Dashboard</span>
                </NavItem>
                <NavItem exact activeClassName="active-admin-nav" to="/admin/assignment" >
                    <span>Assignment</span>
                </NavItem>
                <NavItem exact activeClassName="active-admin-nav" to="/admin/student" >
                    <span>Student</span>
                </NavItem>
            </NavItemWrapper>
            <Logout onClick={logout}>Log out</Logout>
        </Nav>
    )
}
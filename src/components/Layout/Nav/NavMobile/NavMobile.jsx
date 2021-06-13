import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import gsap from "gsap"
import NavItem from "../NavItem/NavItem"
import "../Nav.scss"
const Bell = styled.div`

    display: none;
    @media screen and (max-width: 750px)
    {
        display: block;
        width: 50px;
        height: 50px;
        background:var(--greenGradientColor);
    }

`
const Burger = styled.div`
    display: none;

    @media screen and (max-width: 750px)
    {
        display: block;
        width: 50px;
        height: 50px;
        background:var(--greenGradientColor);
    }
`
const HorBav = styled.div`
    display: none;
    @media screen and (max-width:750px)
    {
        margin: 0px 0px 10vw;
        padding: 20px 40px;
        display: flex;
        position:fixed;
        z-index: 99;
        top: 0;
        justify-content:space-between;
        width: 100vw;
    }
`
const Dropdown = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    width: 100vw;
    height: 0px;
    position: fixed;
    top:0;
    background: antiquewhite;
    z-index: 95;
    overflow: hidden;
`
const ItemLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: auto 20px auto;
        font-size: 1.2rem;
        font-weight: 600;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
export default function NavMobile() {
    const [isOpen, setIsopen] = useState(false)
    const dropRef = useRef(null)
    useEffect(() => {
        if (isOpen === true) {
            const hgt = dropRef.current.scrollHeight;
            gsap.to(dropRef.current, {
                height: "100vh",
            })
        }
        else {

            gsap.to(dropRef.current, {
                height: "0px",
            })
        }

    }, [isOpen])
    return (
        <>
            <HorBav>
                <Burger onClick={() => setIsopen(!isOpen)}>Burger</Burger>
                <Bell>Bell</Bell>
            </HorBav>
            <Dropdown ref={dropRef}>
                <div className="nav-items">
                    <ItemLine onClick={() => { setIsopen(false) }}>
                        <StyledLink to='/' >
                            <p>Home</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={() => { setIsopen(false) }}>
                        <StyledLink to='/leaderboard'>
                            <p>Leaderboard</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={() => { setIsopen(false) }}>
                        <StyledLink to='/games'>
                            <p>Games</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={()=>{setIsopen(false)}}>
                        <StyledLink to='/profile'>
                            <p>Profile</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={()=>{setIsopen(false)}}>
                        <StyledLink to='/profile'>
                            <p>Activites</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={()=>{setIsopen(false)}}>
                        <StyledLink to='/profile'>
                            <p>Badges</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={()=>{setIsopen(false)}}>
                        <StyledLink to='/profile'>
                            <p>Inventory</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={()=>{setIsopen(false)}}>
                        <StyledLink to='/profile'>
                            <p>Settings</p>
                        </StyledLink>
                    </ItemLine>
                    <ItemLine onClick={()=>{setIsopen(false)}}>
                        <StyledLink to='/profile'>
                            <p>Logout</p>
                        </StyledLink>
                    </ItemLine>
                </div>
            </Dropdown>
        </>

    )
}
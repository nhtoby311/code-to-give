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
    margin: 0px 0px 10vw;
    @media screen and (max-width:500px)
    {
        display: flex;
        z-index: 99;
        position: sticky;
        top: 0;
        justify-content:flex-end;
        background: cyan;
        width: 100vw;
    }
`
const Dropdown = styled.div`
    display: hidden;
    width: 100vw;
    height: 0px;
    position: fixed;
    top: 50px;
    background: antiquewhite;
    z-index: 99;
    overflow: hidden;
`
const ItemLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: auto 20px auto;
    }
`
export default function NavMobile() {
    const [isOpen, setIsopen] = useState(false)
    const dropRef = useRef(null)
    useEffect(() => {
        if (isOpen === true) {
            const hgt = dropRef.current.scrollHeight;
            gsap.to(dropRef.current, {
                height: hgt,
            })
        }
        else {

            gsap.to(dropRef.current, {
                height: "0px",
            })
        }

    },[isOpen])
    return (
        <>
            <HorBav>
                <Link to='/profile'>
                    <img src="" alt="" className="profile-pic-small" />
                </Link>
                <Burger onClick={() => setIsopen(!isOpen)}>Burger</Burger>
                <Bell>Bell</Bell>
            </HorBav>
            <Dropdown ref={dropRef}>
                <div className="nav-items">
                    <ItemLine>
                        <NavItem title="home" path='/' />
                        <p>Home</p>
                    </ItemLine>
                    <ItemLine>
                        <NavItem title="leaderboard" path='/leaderboard' />
                        <p>Leaderboard</p>
                    </ItemLine>
                    <ItemLine>
                        <NavItem title="games" path='/games' />
                        <p>Games</p>
                    </ItemLine>
                    
                </div>
            </Dropdown>
        </>

    )
}
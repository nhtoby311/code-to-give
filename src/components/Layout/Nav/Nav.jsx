import usePathDisable from '../../../hooks/usePathDisable'
import './Nav.scss'
import NavItem from './NavItem/NavItem'
import NavMobile from './NavMobile/NavMobile'
import SmallMenu from '../../Common/SmallMenu/SmallMenu'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import styled from 'styled-components'

const ImgDiv = styled.div`
    background-color: grey;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    cursor: pointer;
`


export default function Nav()
{ 
    const [isShow, setIsShow] = useState(false);
    const [base,setBase] = useState(null)                   //since avatar store in here so when navigate through pages, it wont reload since no state update
    const {user} = useContext(AuthContext)
    const img = user && user.avatarURL
    console.log(user)

    const getImg64 = async(URL) => {
        const convertImgToBase64URL = (url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
                let canvas = document.createElement('CANVAS')
                const ctx = canvas.getContext('2d')
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL();
                canvas = null;
                resolve(dataURL)
            }
            img.src = url;
          })
        }
        const image = await convertImgToBase64URL(URL)
        setBase(image)
    }

    useEffect(()=>{
        console.log("runn")
        getImg64(img)                                                       //getImage whenever the user got update, mean after fetched
    },[user])

    useEffect(()=>{
        //console.log(base)
    },[base])

    const {match} = usePathDisable(["/login/*","/register/*","/admin/*"])
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (null)
    }

    const closeMenu = ()=>{
        setIsShow(false)
    }

    return (
        <>
            <nav>
                <div>
                    <ImgDiv img={base} className="profile-pic-small"  onClick ={()=>{setIsShow(!isShow)}}/>
                    <SmallMenu close={closeMenu} isShow={isShow} itemList={["My Profile", "Activities", "Badges", "Inventory", "Settings", "Logout"]}></SmallMenu>
                </div>
                <div className="nav-items">
                    <NavItem title="home" path='/' />
                    <NavItem title="leaderboard" path='/leaderboard'/>
                    <NavItem title="games" path='/games' />
                </div>
                <div></div>
            </nav>
            <NavMobile></NavMobile>
        </>
    )

}
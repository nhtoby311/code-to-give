import { Link, matchPath, useLocation} from 'react-router-dom'
import usePathDisable from '../../../hooks/usePathDisable'
import './Nav.scss'
import NavItem from './NavItem/NavItem'
import NavMobile from './NavMobile/NavMobile'
import SmallMenu from '../../Common/SmallMenu/SmallMenu'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function callMenu()
{
    return <SmallMenu></SmallMenu>
}
export default function Nav()
{ 
    const [isShow, setIsShow] = useState(false);
    const {match} = usePathDisable(["/login/*","/register/*","/admin/*"])
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (null)
    }
    return (
        <>
            <nav>
                <div>
                    <img src="" alt="" className="profile-pic-small"  onClick ={()=>{setIsShow(!isShow)}}/>
                    <SmallMenu isShow={isShow} itemList={["My Profile", "Activities", "Badges", "Inventory", "Settings", "Logout"]}></SmallMenu>
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
import { Link, matchPath, useLocation} from 'react-router-dom'
import usePathDisable from '../../../hooks/usePathDisable'
import './Nav.scss'
import NavItem from './NavItem/NavItem'
import NavMobile from './NavMobile/NavMobile'


export default function Nav()
{
    const {match} = usePathDisable(["/login/*","/register/*","/admin/*"])
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (null)
    }
    return (
        <>
            <nav>
                <Link to='/profile'>
                    <img src="" alt="" className="profile-pic-small" />
                </Link>

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
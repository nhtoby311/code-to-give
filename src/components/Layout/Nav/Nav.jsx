import { Link, useLocation} from 'react-router-dom'
import './Nav.scss'
import NavItem from './NavItem/NavItem'


export default function Nav()
{
    let location = useLocation()
    if(location.pathname == '/login' || location.pathname == '/register')
    {
        return null
    }

    return (
        <nav>
            <Link to='/profile'>
                <img src="" alt="" className="profile-pic-small"/>
            </Link>
            
            <div className="nav-items">
                <NavItem title="home" path='/'/>
                <NavItem title="leaderboard" path='/leaderboard'/>
                <NavItem title="games" path='/games'/>
            </div>
            <div></div>
        </nav>
    )
}
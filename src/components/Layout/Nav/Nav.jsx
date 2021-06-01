import { Link } from 'react-router-dom'
import './Nav.scss'
import NavItem from './NavItem/NavItem'


export default function Nav()
{
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
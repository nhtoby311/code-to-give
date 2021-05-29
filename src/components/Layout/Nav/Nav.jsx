import './Nav.scss'
import NavItem from './NavItem/NavItem'


export default function Nav()
{
    return (
        <nav>
            <h1>p</h1>
            
            <div className="nav-items">
                <NavItem title="home" path='/'/>
                <NavItem title="leaderboard" path='/leaderboard'/>
                <NavItem title="games" path='/games'/>
            </div>
            <div></div>
        </nav>
    )
}
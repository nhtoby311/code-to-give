import './Nav.scss'
import NavItem from './NavItem/NavItem'


export default function Nav()
{
    return (
        <nav>
            <h1>p</h1>
            
            <div className="nav-items">
                <NavItem title="home"/>
                <NavItem title="b"/>
                <NavItem title="c"/>
            </div>
            <div></div>
        </nav>
    )
}
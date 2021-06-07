import { NavLink} from 'react-router-dom'
import Games from './Games/Games'
import Home from './Home/Home'
import Leaderboard from './Leaderboard/Leaderboard'
import './NavItem.scss'



export default function NavItem(props)
{

    function handleInput(i)
    {
        
        switch(i)
        {
            case 'home':
                return <Home />
            case 'games':
                return <Games />
            case 'leaderboard':
                return <Leaderboard /> 
            default:
                return null
        }
    }

    return (
        <>
            <NavLink exact activeClassName="active-nav" to={props.path}>{handleInput(props.title)}</NavLink>
        </>
    )
}
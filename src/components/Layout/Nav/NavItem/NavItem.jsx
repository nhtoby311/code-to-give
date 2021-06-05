import { useEffect, useState } from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import Games from './Games/Games'
import Home from './Home/Home'
import Leaderboard from './Leaderboard/Leaderboard'
import './NavItem.scss'



export default function NavItem(props)
{
    const [active,setActive] = useState(false)
    let location = useLocation();
    useEffect(()=>{
        /*const path = location && location.pathname;
        if (props.path === path)
        {
            console.log("trueee")
        }
        else{
            console.log("other")
            setActive(false)
        }*/
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])


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
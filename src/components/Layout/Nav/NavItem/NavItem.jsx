import {Link} from 'react-router-dom'

function handleInput(i)
{
    switch(i)
    {
        case 'home':
            return <h2>HOME</h2>
        default:
            return <h2>Other</h2>
    }
}

export default function NavItem(props)
{

    return (
        <>
            <Link to={props.path}>{handleInput(props.title)}</Link>
        </>
    )
}
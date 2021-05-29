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
            <h1>{handleInput(props.title)}</h1>
        </>
    )
}
import './Background.scss'
import bg from '../../../assets/background/background1.png'
import usePathDisable from '../../../hooks/usePathDisable'

export default function Background()
{
    const {match} = usePathDisable([])
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (null)
    }

    return (
        <img alt="" src={bg} className="bg">
        </img>
    )
}
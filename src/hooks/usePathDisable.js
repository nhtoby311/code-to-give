import { matchPath, useLocation } from "react-router"

export default function usePathDisable(paths)
{
    let location = useLocation()                               //CHECK FOR MATCHING ROUTE AND NESTED ROUTE
    const match = matchPath(`${location.pathname}/*`,{              
        path:paths,                                             //ROUTE AND NESTED ROUTE CONDITIONS
        exact:true,
    })
    return {match}
}
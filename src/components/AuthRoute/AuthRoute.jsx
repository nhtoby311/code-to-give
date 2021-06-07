import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function AuthRoute({component: Component, ...rest}){
    const { auth } = useContext(AuthContext);
    return(
        <Route
            {...rest}
            render={()=>{
                if(auth)
                {
                    return<Component/>
                }
                else{
                    return <Redirect to="/login"/>
                }}}>
        </Route>
    )
}
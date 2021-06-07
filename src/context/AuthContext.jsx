import React, { useContext, useEffect, useState } from "react"
import useIsMounted from "../hooks/useIsMounted";

export  const  AuthContext  =  React.createContext();

export function AuthProvider({children})
{
    const [auth,setAuth] = useState(false)
    const [user,setUser] = useState(null)
    const isMounted = useIsMounted()    //prevent data leak when setState before mounted

    const login = () =>{
        setAuth(true)
    }

    const getData = () =>{
        const getUserData = async()=>
        {
            const response = await fetch('https://code-to-give.herokuapp.com/users/me',{
                method:"GET",
                headers:{
                    'Authorization': localStorage.getItem('token')
                }
            })
            const result = await response.json()
            console.log(result.user)
            if (isMounted.current) setUser(result.user)
        }


        getUserData()
    }

    useEffect(()=>{
        if(auth){
            getData()
        }
    },[auth])

    return(
        <AuthContext.Provider value={{auth,login,user}}>
            {children}
        </AuthContext.Provider>
    )
}
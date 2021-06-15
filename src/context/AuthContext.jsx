import React, { useEffect, useState } from "react"
import useIsMounted from "../hooks/useIsMounted";

export  const  AuthContext  =  React.createContext();

export function AuthProvider({children})
{
    const [auth,setAuth] = useState((localStorage.getItem('token') != null))
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const isMounted = useIsMounted()    //prevent data leak when setState before mounted

    const login = () =>{
        setAuth(true)
    }
    const logout = async() =>{
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/users/logout`,{
            method:"POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const result = await response.json()
        console.log(result.user)

        localStorage.clear()
        setAuth(false)
        //console.log(localStorage.getItem('token'))
    }

    const getData = () =>{
        const getUserData = async()=>
        {
            const response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/users/me`,{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const result = await response.json()
            console.log(result.user)
            if (isMounted.current) setUser(result.user)
            localStorage.setItem('user',JSON.stringify(result.user))
        }

        if(localStorage.getItem('user'))                                    //Fetch only if user not in localstorage
        {
            //setUser(JSON.parse(localStorage.getItem('user')))
        }
        else{
            getUserData()
        }
    }

    useEffect(()=>{
        if(auth){
            getData()
        }
        // eslint-disable-next-line
    },[auth])

    return(
        <AuthContext.Provider value={{auth,login,user,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
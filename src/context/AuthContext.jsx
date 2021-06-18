import React, { useState } from "react"
import useIsMounted from "../hooks/useIsMounted";

export  const  AuthContext  =  React.createContext();

export function AuthProvider({children})
{
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [auth,setAuth] = useState(user && user.accountType === 'user')
    const [authAdmin,setAuthAdmin] = useState(user && user.accountType === 'admin')
    const isMounted = useIsMounted()    //prevent data leak when setState before mounted


    //console.log(authAdmin)

    const getData = async () =>{
        const getUserData = async()=>
        {
            try
            {
                const response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/users/me`,{
                    method:"GET",
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if(!response.ok)
                    throw new Error(response.statusText)
                const result = await response.json()
                //console.log(result.user)
                if (isMounted.current) setUser(result.user)
                localStorage.setItem('user',JSON.stringify(result.user))
            }
            catch(err){
                console.log(err)
            }
        }

        if(localStorage.getItem('user') == null)                                    //Fetch only if user not in localstorage
        {
            await getUserData()
        }
    }

    const login = async () =>{
        await getData()                                             //Wait for assign user to the state user and localstorage('user')
        if(JSON.parse(localStorage.getItem('user')).accountType === 'admin')                //Because user set state is not fast enough, however, localstroage set is faster, so can get value from it
        {
            setAuthAdmin(true)
            setAuth(false)
        }
        else if (JSON.parse(localStorage.getItem('user')).accountType === 'user'){
            setAuth(true)
            setAuthAdmin(false)
        }
        //setAuth(true)
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
        setAuthAdmin(false)
        //console.log(localStorage.getItem('token'))
    }

    


    return(
        <AuthContext.Provider value={{auth,login,user,logout,authAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}
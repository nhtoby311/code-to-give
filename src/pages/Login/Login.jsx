import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../../components/Common/Input/Input'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Loading from '../../components/Common/Loading/Loading'

export const Form = styled.form`
    width: 50%;
    float: right;
    position: relative;
    min-height: 100vh;
    background: white;
    box-shadow: -6px 4px 15px 2px rgba(0,0,0,0.35);
    display: flex;
    flex-direction: column;
    padding: 50px 150px;
    align-items: center;
    justify-content: center;
    gap: 55px;
    overflow: auto;
    h2
    {
        font-size: 3rem;
    }
    @media (max-width:500px)
    {
        width: 100%;
        padding: 20px;
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 25px;
    border-radius: 25px;
    background: var(--yellowPlainColor);
    font-size: 1.4rem;
    border: none;
    font-weight: 700;
    cursor: pointer;
    span{
        color: white;
    }
`
export const LinkStyled = styled(Link)`
    width: 100%;
    text-decoration: none;
    text-align: center;
`

const LoadingDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(92, 91, 91, 0.2);
    z-index: 2;
`

const Error = styled.h3`
    font-size: 1rem;
    color: red;
`

export default function Login()
{
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const {register , handleSubmit} = useForm()
    const { login, logout, auth ,authAdmin } = useContext(AuthContext);
    const firstRender = useRef(true)
    const history = useHistory()
    //console.log(auth)

    const handleSubmitCallBack = async (data)=>{
        setLoading(true)
        setError(false)
        await logout()                  //LOGOUT FIRST BEFORE LOGIN WITH NEW DATA
        try{
            const response = await fetch('https://code-to-give.herokuapp.com/api/users/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            localStorage.setItem('token',result.token)      //save token to localStorage
            await login()                                 //UPDATE CONTEXT AUTH STATE
            setLoading(false)
            //console.log(localStorage.getItem('token'))
        } catch(err){
            setLoading(false)
            setError(true)
            console.log(err)
        }
    }

    useEffect(()=>{                                     //When ever the the auth state change, depend on them then redirect, prevent first render so reload doesn't cause error
        if(!firstRender.current){
            if(auth === true){
                history.push('/')
            }
            else if (authAdmin === true){
                history.push('/admin')
            }
        }
        else {
            firstRender.current = false
        }
        // eslint-disable-next-line
    },[auth,authAdmin])


    return(
        <Form onSubmit={handleSubmit((data)=>handleSubmitCallBack(data))}>
            {loading ? (<LoadingDiv>
                <Loading/>
            </LoadingDiv>) : (null)}
            <h2>Log in</h2>
            <Input label="Username" register={register('account')}/>
            <Input label="Password" type="password" register={register('password')}/>
            {error ? (<Error>
                Wrong username or password!
            </Error>) : (null)}

            {/* <LinkStyled to="/" style={{width:'100%'}}> */}
                <Button>
                    <span>SIGN IN</span>
                </Button>
            {/* </LinkStyled> */}
            <LinkStyled to="/register" style={{width:'100%'}}>
                <h3>Create an account</h3>
            </LinkStyled>
        </Form>
    )
}
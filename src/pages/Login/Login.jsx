import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../../components/Common/Input/Input'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

export const Form = styled.form`
    width: 50%;
    float: right;
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

export default function Login()
{
    const {register , handleSubmit} = useForm()
    const { auth , login } = useContext(AuthContext);
    const history = useHistory()
    //console.log(auth)

    const handleSubmitCallBack = async (data)=>{
        try{
            const response = await fetch('https://code-to-give.herokuapp.com/api/users/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!response.ok)
                throw new Error(response.statusText)
            const result = await response.json()
            localStorage.setItem('token',result.token)      //save token to localStorage
            login()                                 //UPDATE CONTEXT AUTH STATE
            console.log(localStorage.getItem('token'))
            history.push('/')
        } catch(err){
            console.log(err)
        }
    }

    return(
        <Form onSubmit={handleSubmit((data)=>handleSubmitCallBack(data))}>
            <h2>Log in</h2>
            <Input label="Username" register={register('account')}/>
            <Input label="Password" type="password" register={register('password')}/>

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
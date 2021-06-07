import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../../components/Common/Input/Input'

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
`

/*const InputBox = styled.div`
    width: 100%;
    position: relative;
    span{
        color: var(--blackColor);
        position: absolute;
        left: 0;
        padding: 15px 0;
        font-size: 18px;
        margin: 10px 25px;
        pointer-events: none;
        -webkit-transition: 0.3s;
        background: white;
        border-radius: 25px;
        transition: 0.3s;
        letter-spacing: 1.2px;
        font-weight: 600;
    }
    input:focus ~span ,input:valid ~span
    {
        font-size: 12px;
        padding: 15px 25px;
        transform: translateY(-35px);
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 20px 25px;
    border-radius: 25px;
    border: solid 2px var(--blackColor);
    outline: none;
    font-size: 1.4rem;
`*/

export const Button = styled.button`
    width: 100%;
    padding: 25px;
    border-radius: 25px;
    background: var(--yellowPlainColor);
    font-size: 1.4rem;
    border: none;
    font-weight: 700;
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

    const handleSubmitCallBack = (data)=>{
        console.log(data)
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
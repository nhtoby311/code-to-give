import { useForm } from 'react-hook-form'
import Input from '../../components/Common/Input/Input'
import {Form,Button,LinkStyled} from '../Login/Login'

export default function Register()
{

    const {register , handleSubmit} = useForm()

    const handleSubmitCallBack = async (data)=>{
        const response = await fetch('https://code-to-give.herokuapp.com/users/create',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
        //console.log(data)
    }

    return(
        <Form onSubmit={handleSubmit((data)=>handleSubmitCallBack(data))}>
            <h2>Register</h2>
            <Input label="Username" register={register('account')}/>
            <Input label="Password" type="password" register={register('password')}/>
            <Input label="E-mail" type="password" register={register('email')}/>
            {/* <LinkStyled to="/"> */}
                <Button>
                    <span>SIGN UP</span>
                </Button>
            {/* </LinkStyled> */}
            <LinkStyled to="/login">
                <h3>Already have an account</h3>
            </LinkStyled> 
        </Form>
    )
}
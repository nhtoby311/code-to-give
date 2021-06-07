import Input from '../../components/Common/Input/Input'
import {Form,Button,LinkStyled} from '../Login/Login'

export default function Register()
{
    return(
        <Form>
            <h2>Register</h2>
            <Input/>
            <LinkStyled to="/">
                <Button>
                    <span>SIGN UP</span>
                </Button>
            </LinkStyled>
            <LinkStyled to="/login">
                <h3>Already have an account</h3>
            </LinkStyled> 
        </Form>
    )
}
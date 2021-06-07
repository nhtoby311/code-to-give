import styled from  'styled-components'

const InputBox = styled.div`
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

const InputF = styled.input`
    width: 100%;
    padding: 20px 25px;
    border-radius: 25px;
    border: solid 2px var(--blackColor);
    outline: none;
    font-size: 1.4rem;
`


export default function Input(props)
{
    return(
        <InputBox>
            <InputF type={props.type} {...props.register} required="required"/>
            <span>{props.label}</span>
        </InputBox>
    )
}
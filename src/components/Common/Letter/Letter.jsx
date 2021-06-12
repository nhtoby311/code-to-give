import styled from 'styled-components'

const LetterStyled = styled.input`
    width: 30px;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    border-bottom: solid 2px ${(props) => {
        if (props.color !== undefined) { return props.color }
        else { return `var(--yellowPlainColor)` }
    }};
    font-weight: 600;
    padding: 5px;
    text-align: center;
    outline: none;
    text-transform: capitalize;
`

export default function Letter(props){
    return (
        <LetterStyled color={props.color} type="text" maxLength="1"/>
    )
}
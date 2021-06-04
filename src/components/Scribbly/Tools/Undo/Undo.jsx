import styled from 'styled-components'

const SVG = styled.svg`
    position: absolute;
    top: -30px;
    left:50px;
`

export default function Undo(props)
{
    return(
        <SVG onClick={props.func} width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.6166 30.923C37.6166 29.5121 37.9189 23.9439 33.5266 19.5264C30.5703 16.5533 26.7826 15.0416 21.4916 14.8064V8.0625L5.375 18.8125L21.5 29.5625V22.8605C24.8594 22.9529 26.7406 23.6248 28.7814 24.5402C31.3766 25.6992 33.4258 28.2355 35.1475 30.9734L36.76 33.5938H37.625C37.625 32.7455 37.6166 31.6705 37.6166 30.923Z" fill="black"/>
        </SVG>
    )
}
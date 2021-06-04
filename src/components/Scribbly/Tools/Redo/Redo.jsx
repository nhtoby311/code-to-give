import styled from 'styled-components'

const SVG = styled.svg`
    position: absolute;
    top: -30px;
    right: 50px;
`


export default function Redo(props)
{
    return(
        <SVG onClick={props.func} width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.3834 30.923C5.3834 29.5121 5.08105 23.9439 9.47344 19.5264C12.4297 16.5533 16.2174 15.0416 21.5084 14.8064V8.0625L37.625 18.8125L21.5 29.5625V22.8605C18.1406 22.9529 16.2594 23.6248 14.2186 24.5402C11.6234 25.6992 9.57422 28.2355 7.85254 30.9734L6.24004 33.5938H5.375C5.375 32.7455 5.3834 31.6705 5.3834 30.923Z" fill="black"/>
        </SVG>
    )
}
import styled from 'styled-components'

const PenSVG = styled.svg`
`

export default function Pen(props)
{
    return(
        <PenSVG onClick={props.func} width="20" height="138" viewBox="0 0 20 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 25.5L10 0.5L20 25.5H0.5Z" fill="#FFD3B3"/>
            <path d="M7 8.5L10 0.5L13 8.5H7Z" fill="#333333"/>
            <path d="M0.5 138V25.5H20V138H0.5Z" fill="#FFCA28"/>
            <path d="M10.5 25.5H0.5V138H10.5V25.5Z" fill="#E2B428"/>
        </PenSVG>
    )
}
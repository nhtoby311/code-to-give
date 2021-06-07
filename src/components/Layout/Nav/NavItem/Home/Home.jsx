import styled from 'styled-components'

const SVG = styled.svg`
    width:30px;
    fill: white;
    transition: fill 0.5s;
    &:hover{
        fill:var(--yellowPlainColor);
    }
`

export default function Home()
{

    return (
        <SVG version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 34 36">
            <g>
                <path d="M30.9,12.3l-12-9.8c-1.1-0.9-2.7-0.8-3.8,0.1l-12,9.7C2.4,12.9,2,13.7,2,14.6V31c0,1.7,1.3,3,3,3h7
                    c0,0,0,0,0,0V22.3c0-1.3,0.9-2.3,2-2.3h6c1.1,0,2,1,2,2.3V34c0,0,0,0,0,0h7c1.7,0,3-1.3,3-3V15C32,14.1,31.6,12.9,30.9,12.3z"/>
            </g>
        </SVG>
    )
}
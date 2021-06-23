import styled from "styled-components"

const StyledSVG = styled.svg`
    cursor: pointer;
    &:hover rect{
        fill: yellow;
        transition: fill 0.5s;
    }
`

export default function Cross(){
    return(
        <StyledSVG width="15" height="16" viewBox="0 0 15 16" fill="none" >
            <rect x="1.86743" width="19.0548" height="2.38184" rx="1.19092" transform="rotate(46.4343 1.86743 0)" fill="white"/>
            <rect width="19.0548" height="2.38184" rx="1.19092" transform="matrix(0.689186 -0.724585 -0.724585 -0.689186 1.72583 15.5854)" fill="white"/>
        </StyledSVG>
    )
}
import styled from "styled-components"
import {Link} from "react-router-dom"
const Line = styled.li`
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: white;
`
const StyledLink = styled(Link)`
    color: #FBFF2C;
`
export default function TextBlockLine(props)
{
    return(
        <Line>{props.name} {props.method} <StyledLink to="/">'{props.quiz_name}'</StyledLink> due to  {props.date}</Line>
    )
}
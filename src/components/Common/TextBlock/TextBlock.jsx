import styled from "styled-components"
const Tbx = styled.div`
    width: 100%;
    margin-top: 20px;
    overflow: scroll;

`
const Line = styled.p`

`
function create_line(element)
{
    return(
        <Line>
            {element.name} {element.method}
            <a href="{element.link}">{element.quiz_name} </a>
            due to {element.date}
        </Line>
    )
}

export default function TextBlock(props) {
    props.forEach(element => {
        Tbx.appendChild(create_line(element));
    });
    ans=document.getElementsByTagName()
    return(
    )
}
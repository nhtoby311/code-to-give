import styled from "styled-components"
const AnswerDiv = styled.div`
padding: 15px;
background: red;
cursor: pointer;
`
export default function Answer(props)
{
    return (
        <AnswerDiv onClick={props.func}>
            {props.content}
        </AnswerDiv>
    )
}
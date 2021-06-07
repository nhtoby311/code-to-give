import styled from 'styled-components'

const AnswerDiv = styled.div`
    width: 100%;
    padding: 50px;
    background: red;
    border-radius: 25px;
    p
    {
        font-size:1.2rem;
        font-weight: 500;
    }
`

export default function QuizAnswer(props)
{
    return(
        <AnswerDiv onClick={props.funcNext}>
            <p>A.{props.content}</p>
        </AnswerDiv>
    )
}
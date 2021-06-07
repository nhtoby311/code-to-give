import styled from "styled-components"
import Answer from "./Answer/Answer"
const AnswerCont = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 35px;
`

export default function FourQuiz(props)
{
    return(
        <AnswerCont>
            <Answer content="A.asasc" func={props.func}/>
            <Answer content="B.sacasc" func={props.func}/>
            <Answer content="C.asdasda" func={props.func}/>
            <Answer content="D.askdoasd" func={props.func}/>
        </AnswerCont>
    )
}
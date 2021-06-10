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
    console.log(props.data)
    return(
        <AnswerCont>
            {props.data && props.data.options.map((ele,ind)=>{
                return <Answer color={ind} key={ind} content={ele} func={props.func}/>
            })}
        </AnswerCont>
    )
}
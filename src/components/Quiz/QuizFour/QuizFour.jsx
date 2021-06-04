import * as vars from '../../../styles/var'
import styled from 'styled-components'
import QuizAnswer from './QuizAnswer/QuizAnswer'

const DivContent = styled.div`
    width: 70%;
    height: 350px;
    background: ${vars.greenColor};
`

const DivAnswerCont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px;
`


export default function QuizFour(props)
{
    return (
        <>
            <DivContent/>

            <DivAnswerCont>
                <QuizAnswer funcNext= {props.funcNext} content="answer1"/>
                <QuizAnswer funcNext= {props.funcNext} content="answer2"/>
                <QuizAnswer funcNext= {props.funcNext} content="answer3"/>
                <QuizAnswer funcNext= {props.funcNext} content="answer4"/>
            </DivAnswerCont>
        </>
    )  
}
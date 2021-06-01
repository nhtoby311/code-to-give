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


export default function QuizFour()
{
    return (
        <>
            <DivContent/>

            <DivAnswerCont>
                <QuizAnswer content="answer1"/>
                <QuizAnswer content="answer2"/>
                <QuizAnswer content="answer3"/>
                <QuizAnswer content="answer4"/>
            </DivAnswerCont>
        </>
    )  
}
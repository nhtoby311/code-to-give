import * as vars from '../../../styles/var'
import styled from 'styled-components'
import QuizAnswer from './QuizAnswer/QuizAnswer'
import img from '../../../assets/mock_assets/apple_mock.jpg'        /*MOCK ONLY,REMOVE LATER */

const DivContent = styled.div`
    width: 65%;
    height: 450px;
    background: ${vars.greenColor};
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`

const DivAnswerCont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px;
`

const QuizTask = styled.div`
    width: 100%;
    height: 100px;
    background: ${vars.greenColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    h3{
        font-size: 2rem;
    }
`


export default function QuizFour(props)
{
    return (
        <>
            <QuizTask>
                <h3>How many apple in the basket?</h3>
            </QuizTask>

            <DivContent img={img}/>

            <DivAnswerCont>
                <QuizAnswer color={0} funcNext= {props.funcNext} content="1"/>
                <QuizAnswer color={1} funcNext= {props.funcNext} content="2"/>
                <QuizAnswer color={2} funcNext= {props.funcNext} content="3"/>
                <QuizAnswer color={3} funcNext= {props.funcNext} content="4"/>
            </DivAnswerCont>
        </>
    )  
}
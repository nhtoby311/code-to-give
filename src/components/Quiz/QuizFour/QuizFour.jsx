import * as vars from '../../../styles/var'
import styled from 'styled-components'
import QuizAnswer from './QuizAnswer/QuizAnswer'      /*MOCK ONLY,REMOVE LATER */

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
    console.log(props.data)
    return (
        <>
            <QuizTask>
                <h3>{props.data && props.data.question}</h3>
            </QuizTask>

            <DivContent img={props.data.questionImageURL}/>

            <DivAnswerCont>
                {props.data.options && props.data.options.map((ele,ind)=>{
                    return <QuizAnswer key={ind} color={ind} funcNext= {props.funcNext} content={ele}/>
                })}
            </DivAnswerCont>
        </>
    )  
}
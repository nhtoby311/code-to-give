import styled from 'styled-components'
import * as vars from '../../../styles/var'
import FillInBlankQuiz from '../../FillInBlankQuiz/FillInBlankQuiz'

const DivContent = styled.div`
    width: 60%;
    height: 550px;
    background: ${vars.greenColor};
    background: ${vars.greenColor};
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 70px;
    gap: 30px;
    align-items: center;
    background: ${vars.greenColor};
    border-radius: 25px;
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



export default function QuizWrite(props)
{
    console.log(props.data)

    return(
        <>
            <QuizTask>
                <h3>{props.data && props.data.question}</h3>
            </QuizTask>

            <DivContent img={props.data.questionImageURL}/>
            <Wrapper>
                <FillInBlankQuiz func={props.funcNext} data={props.data}/>
            </Wrapper>
        </>
    )
}
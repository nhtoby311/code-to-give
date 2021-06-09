import styled from 'styled-components'
import * as vars from '../../../styles/var'

const QuizContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background : ${vars.yellowColor};
    padding: 10px 20px;
    border-radius: 15px;
    @media (max-width:500px)
    {
        flex-direction: column;
    }
`

export default function QuizBlockLine(props)
{
    return(
        <QuizContainer>
            <h3>{props.quiz_name}</h3>
            <h4>{props.point} pts</h4>
            <p>{props.date}</p>
        </QuizContainer>
    )
}
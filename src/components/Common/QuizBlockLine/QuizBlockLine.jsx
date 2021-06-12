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
        font-size:0.9rem;
    }
`

export default function QuizBlockLine(props)
{
    return(
        <QuizContainer>
            <h3>{props.quiz_name}</h3>
            <p>{props.point} pts</p>
            <p>{props.date}</p>
        </QuizContainer>
    )
}
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
`

export default function QuizBlockLine()
{
    return(
        <QuizContainer>
            <h3>Quiz123</h3>
            <h4>25pts</h4>
            <p>date</p>
        </QuizContainer>
    )
}
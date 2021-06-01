import styled from 'styled-components'
import QuizBlockLine from'../../QuizBlockLine/QuizBlockLine'


const QuizContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 35px;
    overflow-y: auto;
`

export default function BlockQuiz(props)//Take in array of object quizLine
{
    return (
        <QuizContainer>
            {/* MOCK UI */}
            <QuizBlockLine/>  
            <QuizBlockLine/>
            <QuizBlockLine/>
            <QuizBlockLine/>
            <QuizBlockLine/>
        </QuizContainer>
    )
}
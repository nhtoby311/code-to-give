import styled from 'styled-components'
import QuizBlockLine from'../../QuizBlockLine/QuizBlockLine'


const QuizContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 35px;
    overflow-y: auto;
    @media (max-width:500px)
    {
        gap: 20px;
    }
`

export default function BlockQuiz(props)//Take in array of object quizLine
{
    return (
        <QuizContainer>
            {props.data && props.data.map((ele,ind)=>{return <QuizBlockLine key={ind} quiz_name={ele.quiz_name} point={ele.point} date={ele.date}/>})}
        </QuizContainer>
    )
}
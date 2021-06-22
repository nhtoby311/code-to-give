import { useEffect, useState } from 'react'
import styled from 'styled-components'
import QuizFour from './QuizFour/QuizFour'
import QuizWrite from './QuizWrite/QuizWrite'
import {Link, useParams} from 'react-router-dom'
import Button from '../../components/Common/Button/Button'
import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'

const QuizCont = styled.div`
    width:80%;
    min-height: 95vh;
    margin: 60px 0;
    margin-left: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const ButtonDiv = styled.div`
    width: 30%;
`


const linearSearch = (list, item) => {
    for (const element of list.entries()) {
        if (element[1].quizId === item) {
            return element[1]
        }
    }
}

export default function Quiz()
{
    const [quizInd,setQuizInd] = useState(0)
    const [quiz,setQuiz] = useState(null)
    const {dataToDo} = useContext(QuizContext)
    const params = useParams()              //Getting ID route
    
    const quizData = linearSearch(dataToDo, params.id)

    const handleNext=()=>
    {
        if (quizData.questions.length > quizInd)
        {
            setQuizInd(quizInd+1)
        }
    }

    useEffect(()=>{
        const question = quizData.questions[quizInd]
        console.log(question)
        if(question){
            switch(question.questionType)
            {
                case 'FillInBlankQuestion':
                    setQuiz(<QuizWrite data={question.info} funcNext={handleNext}/>) 
                    break;
                case 'MultipleChoiceQuestion':
                    setQuiz(<QuizFour data={question.info} funcNext={handleNext}/>)
                    break;
                default:
                    setQuiz(<h1>ERROR! Could not found this questionType</h1>)
                    break;
            }
        }
        else{                                                           //IF EXCEED THE QUESTION ARRAY
            setQuiz(<>
                <div></div>
                <ButtonDiv>
                    <Link to="/games">
                        <Button pad="35px" content="Finished! Return to Games"/>
                    </Link>
                </ButtonDiv>
                <div></div>
                </>)
        }
        // eslint-disable-next-line
    },[quizInd])
    

   

    return(
        <QuizCont>
            {quiz}
        </QuizCont>
    )
}
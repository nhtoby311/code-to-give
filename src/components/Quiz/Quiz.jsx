import { useEffect, useState } from 'react'
import styled from 'styled-components'
import QuizFour from './QuizFour/QuizFour'
import QuizWrite from './QuizWrite/QuizWrite'
import {Link} from 'react-router-dom'
import Button from '../../components/Common/Button/Button'

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

export default function Quiz()
{
    const quizData =['w','f']
    const [quizInd,setQuizInd] = useState(0)
    const [quiz,setQuiz] = useState(null)


    const handleNext=()=>
    {
        if (quizData.length > quizInd)
        {
            setQuizInd(quizInd+1)
        }
    }

    useEffect(()=>{
        console.log(quizData[quizInd])
        console.log(quizInd)
        switch(quizData[quizInd])
        {
            case 'w':
                setQuiz(<QuizWrite funcNext={handleNext}/>) 
                break;
            case 'f':
                setQuiz(<QuizFour funcNext={handleNext}/>)
                break;
            default:
                setQuiz(<>
                <div></div>
                <ButtonDiv>
                    <Link to="/games">
                        <Button pad="35px" content="Finished! Return to Games"/>
                    </Link>
                </ButtonDiv>
                <div></div>
                </>)
                break;
        }
        // eslint-disable-next-line
    },[quizInd])
    

   

    return(
        <QuizCont>
            {quiz}
        </QuizCont>
    )
}
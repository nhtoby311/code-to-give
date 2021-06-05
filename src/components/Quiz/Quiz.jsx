import { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as vars from '../../styles/var'
import QuizFour from './QuizFour/QuizFour'
import QuizWrite from './QuizWrite/QuizWrite'
import {Link} from 'react-router-dom'
import Button from '../../components/Common/Button/Button'

const QuizCont = styled.div`
    width:80%;
    min-height: 95vh;
    margin: 60px 0;
    border: blue solid 1px;
    margin-left: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const QuizTask = styled.div`
    width: 100%;
    height: 100px;
    background: ${vars.greenColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

const ButtonDiv = styled.div`
    width: 30%;
`

export default function Quiz()
{
    const quizData =['w','w','f','w','f']
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
                <ButtonDiv>
                    <Link to="/games">
                        <Button content="Return to Games"/>
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
            <QuizTask>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nisi!</h3>
            </QuizTask>
            {quiz}
        </QuizCont>
    )
}
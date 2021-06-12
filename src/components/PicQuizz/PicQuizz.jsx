import styled from "styled-components"
import "./PicQuizz.scss"
import "./SmallQuizz/SmallQuizz"
import SmallQuizz from "./SmallQuizz/SmallQuizz"
//import QuizWrite from "../Quiz/QuizWrite/QuizWrite"
import { useContext, useState } from "react"
import Button from "../Common/Button/Button"
import { QuizContext } from "../../context/QuizContext"
import { useLocation, useParams } from "react-router"
const QuizzTitle = styled.div`
    width: 100%;

    background-color: #77BC1F;
    grid-area: 1 / 1 / span 1 /span 5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 50px;
    border-radius: 20px;
    p 
    {
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        color: #353331;
    }
`
const PicArea = styled.div`
    grid-area: 2 / 1 / span 1 / 5; 
    min-width: 60vw;
    min-height: 600px;
    background: aqua;
    //background-image: url(${props => props.url});  /*ENABLE LATER */
    background-size: cover;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "one two three"
    "four five six";

`

const AnswerArea = styled.div`
    grid-area: 2 / 5 / span 1 / 6;
    background-color: beige;
    border-radius: 25px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 
    {
        text-align: center;
        font-size: 1.5rem;
        border-bottom: 2px #FFD42A solid;
    }
`
const AnswerBox = styled.div`
    display: flex;
    max-width: 350px;
    flex-direction: column;
    align-items: center;
`
const Letter = styled.input`
    width: 30px;
    font-size: 0.95rem;
    background: transparent;
    border: none;
    border-bottom: solid 2px red;
    padding: 10px;
    outline: none;
    text-transform: uppercase;
    font-weight: 600;
`
const LetterCont = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin: 55px 0;
    margin-top: 25px;
`

const Space = styled.div`
    width: 40px;
`


const linearSearch = (list, item) => {
    for (const element of list.entries()) {
      if (element[1].quizId === item) {
        return element[1]
      }
    }
}
  

export default function PicQuizz() {
    const [currentWindow,setCurrentWindow] = useState(0) //CLICK ON ANOTHER QUIZ WILL REMOVE THE CURRENT QUIZ
    const params = useParams()              //Getting ID route
    const {dataToDo} = useContext(QuizContext)
    
    //console.log(params.id)
    console.log(dataToDo)
    const quizData = linearSearch(dataToDo,params.id)
    //console.log(quizData)
    const Letters = [...quizData.bigAnswer]

    return (
        <div className="container pic-quizz-container">
            <QuizzTitle><p>{quizData.bigQuestion}</p></QuizzTitle>
            <PicArea url={quizData.bigQuestionImageURL}>
                {quizData.smallQuestions && quizData.smallQuestions.map((ele,ind)=>{
                    return <SmallQuizz key={ind} cur={currentWindow} funcCur={()=>setCurrentWindow(ind+1)} number={ind+1} data={ele} />
                })}
            </PicArea>
            <AnswerArea>
                <AnswerBox>
                    <h3>Answer</h3>
                    <LetterCont>
                        { dataToDo && Letters.map((ele,ind)=>{
                            console.log(ele)
                            if(ele === " "){
                                return <Space key={ind}/>
                            }
                            else {
                                return <Letter type="text" key={ind}/>
                            }
                        })}
                    </LetterCont>
                    <Button content="SUBMIT" pad="15px"/>
                </AnswerBox>
            </AnswerArea>
        </div>
    )
}
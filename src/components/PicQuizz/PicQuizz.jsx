import styled from "styled-components"
import "./PicQuizz.scss"
import "./SmallQuizz/SmallQuizz"
import SmallQuizz from "./SmallQuizz/SmallQuizz"
import QuizWrite from "../Quiz/QuizWrite/QuizWrite"
import { useState } from "react"
import Button from "../Common/Button/Button"
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
    height: 600px; /*remove later*/ 
    min-width: 60vw;
    background-color: aqua;
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
    gap: 15px;
    margin: 55px 0;
    margin-top: 25px;
`

export default function PicQuizz() {
    const [currentWindow,setCurrentWindow] = useState(0) //CLICK ON ANOTHER QUIZ WILL REMOVE THE CURRENT QUIZ

    return (
        <div className="container pic-quizz-container">
            <QuizzTitle><p>Who is this ?</p></QuizzTitle>
            <PicArea>
                <SmallQuizz cur={currentWindow} funcCur={()=>setCurrentWindow(1)} number={1} grid="one" />
                <SmallQuizz cur={currentWindow} funcCur={()=>setCurrentWindow(2)} number={2} grid="two"/>
                <SmallQuizz cur={currentWindow} funcCur={()=>setCurrentWindow(3)} number={3} grid="three"/>
                <SmallQuizz cur={currentWindow} funcCur={()=>setCurrentWindow(4)} number={4} grid="four"/>
                <SmallQuizz cur={currentWindow} funcCur={()=>setCurrentWindow(5)} number={5} grid="five"/>
                <SmallQuizz cur={currentWindow} funcCur={()=>setCurrentWindow(6)} number={6} grid="six"/>
            </PicArea>
            <AnswerArea>
                <AnswerBox>
                    <h3>Answer</h3>
                    <LetterCont>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                        <Letter type="text" maxLength="1"></Letter>
                    </LetterCont>
                    <Button content="SUBMIT" pad="15px"/>
                </AnswerBox>
            </AnswerArea>
        </div>
    )
}
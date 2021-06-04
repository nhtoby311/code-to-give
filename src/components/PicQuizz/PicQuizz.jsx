import styled from "styled-components"
import "./PicQuizz.scss"
import "./SmallQuizz/SmallQuizz"
import SmallQuizz from "./SmallQuizz/SmallQuizz"
import QuizWrite from "../Quiz/QuizWrite/QuizWrite"
import { useState } from "react"
const QuizzTitle = styled.div`
    width: 100%;

    background-color: #77BC1F;
    grid-area: 1 / 1 / span 1 /span 4;
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
    grid-area: 2 / 1 / span 1 / span 3;
    background-color: aqua;
    height: 600px;
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
    grid-area: 2 / 4 / span 1 / span 1;
    background-color: beige;
    p 
    {
        text-align: center;
        font-size: 1.5rem;
    }
`
export default function PicQuizz() {
    const [questions, setQuestions] = useState([]);
    return (
        <div className="container pic-quizz-container">
            <QuizzTitle><p>Who is this ?</p></QuizzTitle>
            <PicArea>
                <SmallQuizz number="1" />
                <SmallQuizz number="2" />
                <SmallQuizz number="3" />
                <SmallQuizz number="4" />
                <SmallQuizz number="5" />
                <SmallQuizz number="6" />
            </PicArea>
            <AnswerArea>

            </AnswerArea>
        </div>
    )
}
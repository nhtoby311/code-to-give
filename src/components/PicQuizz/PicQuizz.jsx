import styled from "styled-components"
import "./PicQuizz.scss"
import "./SmallQuizz/SmallQuizz"
import SmallQuizz from "./SmallQuizz/SmallQuizz"
//import QuizWrite from "../Quiz/QuizWrite/QuizWrite"
import { useContext, useState } from "react"
import Button from "../Common/Button/Button"
import { QuizContext } from "../../context/QuizContext"
import { useLocation, useParams } from "react-router"
import Letter from "../Common/Letter/Letter"
import { useHistory } from "react-router-dom"
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
    background-image: url(${props => props.url});  /*ENABLE LATER */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "one two three"
    "four five six";
    @media (max-width:500px)
    {
        grid-area:2 / 1 / span 1 / 6;
    }
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
    @media (max-width:500px)
    {
       grid-area: 3 / 1 / span 1 / 6;
    }
`
const AnswerBox = styled.div`
    display: flex;
    max-width: 350px;
    flex-direction: column;
    align-items: center;
`
/*const Letter = styled.input`
    width: 30px;
    font-size: 0.95rem;
    background: transparent;
    border: none;
    border-bottom: solid 2px red;
    padding: 10px;
    outline: none;
    text-transform: uppercase;
    font-weight: 600;
`*/
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
    const [array, setArray] = useState([])
    const [currentWindow, setCurrentWindow] = useState(0) //CLICK ON ANOTHER QUIZ WILL REMOVE THE CURRENT QUIZ
    const params = useParams()              //Getting ID route
    const {dataToDo} = useContext(QuizContext)
    const history = useHistory()
    
    //console.log(params.id)
    console.log(dataToDo)
    const quizData = linearSearch(dataToDo, params.id)
    //console.log(quizData)
    const Letters = [...quizData.bigAnswer]


    const addValue = (e) => {
        const temp = array;              //Add Object to array of true
        temp.push(e)
        console.log(array)
        setArray(temp)
    }

    const removeValue = (i) => {
        let temp = array;
        temp = temp.filter((ele) => { return ele.ind !== i })       //remove an value with index of input send from Letter JSX{value:bool,ind:int}
        console.log(array)
        setArray(temp)
    }

    const submitHandler = async()=>{
        if(array.filter((ele)=>ele.value===true).length === Letters.filter((ele)=>{return ele!= ' '}).length)        //If number of true inputs same as number of letter of answer minus space ' ', then correct
        {
            console.log("/api/pic-quiz/submit/:quizId")
            const formData = new FormData()  
            const date = new Date
            formData.append("takenDate",date)
            const response = await fetch (`https://code-to-give.herokuapp.com/api/pic-quiz/submit/${params.id}`,{
                method:"POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body:formData
            })
            const result = await response.json()
            console.log(result)
            history.push('/games/PicQuizz')
        }
    }

    return (
        <div className="container pic-quizz-container">
            <QuizzTitle><p>{quizData.bigQuestion}</p></QuizzTitle>
            <PicArea url={quizData.bigQuestionImageURL}>
                {quizData.smallQuestions && quizData.smallQuestions.map((ele, ind) => {
                    return <SmallQuizz key={ind} cur={currentWindow} funcCur={() => setCurrentWindow(ind + 1)} number={ind + 1} data={ele} />
                })}
            </PicArea>
            <AnswerArea>
                <AnswerBox>
                    <h3>Answer</h3>
                    <LetterCont>
                        {dataToDo && Letters.map((ele, ind) => {
                            if (ele === " ") {
                                return <Space key={ind} />
                            }
                            else {
                                return <Letter
                                    ind={ind}
                                    answer={ele}
                                    funcAdd={(e) => addValue(e)}
                                    funcRemove={(i) => removeValue(i)}
                                    color="red"
                                    type="text"
                                    key={ind} />
                            }
                        })}
                    </LetterCont>
                    <Button func={submitHandler} content="SUBMIT" pad="15px"/>
                </AnswerBox>
            </AnswerArea>
        </div>
    )
}
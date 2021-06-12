import gsap from "gsap"
import { useEffect,useRef,useState } from "react"
import styled from "styled-components"
import {Window} from '../../List/List'
import FourQuiz from "./FourQuiz/FourQuiz"
import WriteQuiz from "./WriteQuiz/WriteQuiz"
const SmQuizz = styled.div`
    background: #77BC1F;
    border: 2px solid #FFD42A;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    .lable 
    {
        background: linear-gradient(180deg, #FF9500 , #E8BB09 );
        width: 70px;
        height:70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p 
    {
        font-size: 2rem;
    }
    &:hover{
        background: #3CA915;
    }
`

const QuestionTitle = styled.h3`
    font-size: 2rem;
    padding: 0 35px;
    text-align: center;
    margin-bottom: 35px;
`
const QuestionContent = styled.div`
    width: 60%;
    height: 200px;
    background: #12b127;
    margin-bottom: 35px;
`
const Close = styled.h3`
    font-size: 1.5rem;
    position: absolute;
    top: 35px;
    right: 35px;
    cursor: pointer;
`


export default function SmallQuizz(props) {
    const [window,setWindow] = useState(false)
    const [done,setDone] = useState(false)
    const windowRef = useRef(null)

    const quizData = props.data.info

    const handleDone = ()=>{
        setWindow(false)
        setDone(true)
    }


    const doneClass = ()=>{
        if(done === true) return "done-quiz"
        return ""
    }

    useEffect(()=>{
        if(window === true)
        {
            gsap.to(windowRef.current,{
                opacity: 1,
                duration:0.3,
                pointerEvents:'auto'
            })
        }
        else
        {
            gsap.to(windowRef.current,{
                opacity: 0,
                duration:0.3,
                pointerEvents:'none'
            })
        }
    },[window])

    useEffect(()=>{                             //whenever props.cur is updated and diff than the number, will set the window the not right number and current to false   
        if(props.cur !== props.number)
        {
            setWindow(false)
        }
        // eslint-disable-next-line
    },[props.cur])


    const handleTypeQuiz = () =>{
        if(quizData.questionType === "fill-in-blank")
        {
            return <WriteQuiz data={quizData} func={handleDone}/>
        }
        else if(quizData.questionType === "multiple-choice"){
            return <FourQuiz data={quizData} func={handleDone}/>
        }
        else{
            return (<h1>ERROR UNKNOWN QUESTION TYPE</h1>)
        }
    }

    // 
    return (
        <>
            <Window className="test" ref={windowRef}>
                <Close onClick={()=>{setWindow(false)}}>
                    X
                </Close>
                <QuestionTitle>{quizData.question}</QuestionTitle>
                <QuestionContent/>
                {handleTypeQuiz()}
            </Window>
            <SmQuizz className={`${doneClass()}`} onClick={()=>{
                props.funcCur()
                setWindow(!window)
                }}>
                <div className="lable">
                    <p>
                        {props.number}
                    </p>
                </div>
            </SmQuizz>
        </>
    )
}
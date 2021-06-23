import styled from "styled-components"
import Window from "../../List/Window/Window"
import { useEffect, useRef, useState } from 'react'
import gsap from "gsap"
import Arrow from '../Arrow/Arrow'

const Qline = styled.div`
    width: 100%;
    background: var(--yellowColor);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
    p{
        font-weight: 500;
    }
    &:hover{
        background: #ffb300;
    }
    @media (max-width:500px)
    {
        font-size: 0.9rem;
    }
`
const DateAndArrow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
`




export default function QuizLine(props) {
    const [windowActive, setWindowActive] = useState(false)
    const windowRef=useRef(null)
    useEffect(() => {
        
        if (windowActive) {
            gsap.to(windowRef.current, {
                opacity: 1,
                duration: 0.3,
                pointerEvents: 'auto'
            })
        }
        else {
            gsap.to(windowRef.current, {
                opacity: 0,
                duration: 0.3,
                pointerEvents: 'none'
            })
        }

    }, [windowActive])


    useEffect(()=>{                             //whenever props.cur is updated and diff than the number, will set the window the not right number and current to false   
        if(props.cur !== props.data.quizId)
        {
            setWindowActive(false)
        }
        // eslint-disable-next-line
    },[props.cur])
    //console.log(props.data)
    return (
        <>
        <Window windowRef={windowRef} 
        data={props.data}
        funcClose={()=>{setWindowActive(false)}}/>

        <Qline onClick = {()=>{
            props.funcCur()
            setWindowActive(!windowActive)
        }}>
            <p>{props.data.quizName}</p>
            <DateAndArrow>
                <p>Due {props.data.dueDate && props.data.dueDate.substring(0, 10)}</p>
                <Arrow/>
            </DateAndArrow>
        </Qline>
        </>

    )
}
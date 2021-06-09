import styled from "styled-components"
import * as vars from '../../../styles/var'
import Window from "../../List/Window/Window"
import { useEffect, useRef, useState } from 'react'
import gsap from "gsap"
const Qline = styled.div`
    width: 100%;
    background-color: ${vars.plainYellow};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`
const DateAndArrow = styled.div`
    display: flex;
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
        if(props.cur !== props.data.id)
        {
            setWindowActive(false)
        }
        // eslint-disable-next-line
    },[props.cur])
    console.log(props.data)
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
                <p>Due {props.data.dueDate.substring(0, 10)}</p>
                <p>A</p>
            </DateAndArrow>
        </Qline>
        </>

    )
}
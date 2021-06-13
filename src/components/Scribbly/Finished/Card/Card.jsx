import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`
const Pic = styled.div`
    width: 100%;
    height: 250px;
    background: #b6b6b6;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    border-radius: 15px;
`

const EnlargePic = styled.div`
    position: fixed;
    z-index: 90;
    left: 50%;
    top: 18%;
    margin-left: -30%;
    width: 60vw;
    height: 70vh;
    background: #b6b6b6;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    box-shadow: 12px 10px 10px 7px rgba(0,0,0,0.25);
    opacity: 0;
`

const Emojis = styled.div`
    grid-area: emojis;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    div{
        display: flex;
        align-items: center;
    }
    p{
        font-size: 25px;
    }
    h4{
        margin-top: 0.3rem;
        font-size: 1.15rem;
    }
`

const Date = styled.h4`
    font-size: 1.1rem;
`
const TeacherCmt = styled.p`
    font-size: 1rem;
`
const Grade = styled.div`
    width: 40%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    background: var(--yellowColor);
    border-radius: 25px;
    span{
        font-size: 2rem;
        font-weight: 600;
    }
`

const GradeDis = styled.div`
    width: 40%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    background: #cccaca;
    border-radius: 25px;
    span{
        font-size: 1.1rem;
        font-weight: 600;
    }
`

export default function Card(props){
    const [enlarge,setEnlarge] = useState(false)
    const enlargeRef = useRef(null)
    console.log(props.data)

    const toggleEnlarge = ()=>{
        setEnlarge(!enlarge)
    }

    useEffect(()=>{
        if(enlarge){
            gsap.to(enlargeRef.current,{
                opacity: 1,
                pointerEvents:'auto',
                duration:0.4
            })
        }
        else{
            gsap.to(enlargeRef.current,{
                opacity: 0,
                pointerEvents:'none',
                duration:0.4
            })
        }
    },[enlarge])

    return(
        <>
            <EnlargePic onClick={toggleEnlarge} ref={enlargeRef} img={props.data && props.data.studentWorkURL}/>
            <Div>
                <Pic onClick={toggleEnlarge} img={props.data && props.data.studentWorkURL}/>
                <Emojis>
                    <div>
                        <p>😍</p>
                        <h4>{props.data && props.data.loveReact}</h4>
                    </div>
                    <div>
                        <p>😂</p>
                        <h4>{props.data && props.data.hahaReact}</h4>
                    </div>
                    <div>
                        <p>😲</p>
                        <h4>{props.data && props.data.wowReact}</h4>
                    </div>
                </Emojis>
                <Date>
                    24 April 2021
                </Date>
                <TeacherCmt>
                    @teacher said: lmao bruh bruh
                </TeacherCmt>
                
                {props.data && props.data.score === -1 ? 
                    (<GradeDis>
                        <span>PENDING</span>
                    </GradeDis>)
                    : (<Grade>
                        <span>{props.data.score}</span>
                    </Grade>)
                }
            </Div>
        </>
    )
}
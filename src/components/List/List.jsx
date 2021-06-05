import styled from 'styled-components'
import Block from '../Common/Block/Block'
import Button from '../Common/Button/Button'
import * as vars from '../../styles/var'
import { useEffect, useState } from 'react'
import gsap from "gsap";

const Container = styled.div`
    width: 80%;
    margin-left: 12%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "title title title title title title title"
        "need-to-do need-to-do need-to-do need-to-do finished finished finished";
    grid-gap: 50px 30px;
    margin-top: 150px;
    
` 
const TitleBlock = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: title;
    background-color: green;
    border-radius: 25px;
    span{
        font-size: 3.5rem;
    }
`

export const Window = styled.div`
    position: fixed;
    width: 40%;
    padding: 30px;
    background: ${vars.greenPlainLightColor};
    border-radius: 25px;
    left: 50%;
    top: 20%;
    margin-left: -17%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 12px 10px 10px 7px rgba(0,0,0,0.25);
    align-items: center;
    opacity: 0;
`

const TitleWindow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 25px;
    align-items: center;
    margin-bottom: 35px;
    p{
        font-size: 2.6rem;
    }
`
const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 35px;
    margin-bottom: 35px;
    p{
       
        &:nth-of-type(even)
        {
            text-align: end;
        }
    }
`


export default function List()
{
    const [windowActive,setWindowActive] = useState(false)

    
    useEffect(()=>{
        if(windowActive)
        {
            gsap.to('.window',{
                opacity: 1,
                duration:0.3,
                pointerEvents:'auto'
            })
        }
        else
        {
            gsap.to('.window',{
                opacity: 0,
                duration:0.3,
                pointerEvents:'none'
            })
        }
        
    },[windowActive])

    return(
        <Container>
            <Window className="window">
                <TitleWindow>
                    <p>Quiz_123</p>
                </TitleWindow>
                <Grid>
                    <p>Time-limit: 13 minutes</p>
                    <p>Point: 12pts</p>
                    <p>Due date: 22 May 2021</p>
                    <p>Possible Attemps: 1</p>
                </Grid>
                <Button content="start" pad="15px"></Button>
            </Window>
            <TitleBlock>
                <span>Quiz</span>
            </TitleBlock>
            <button onClick={()=>setWindowActive(!windowActive)}>asdasd</button>
            <Block title="need-to-do" type="quiz" >
            </Block>
            <Block title="finished" type="quiz" >

            </Block>
        </Container>
    )
}
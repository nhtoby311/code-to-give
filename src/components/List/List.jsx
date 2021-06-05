import styled from 'styled-components'
import Block from '../Common/Block/Block'
import * as vars from '../../styles/var'
import { useEffect, useState } from 'react'

const Container = styled.div`
    width: 80%;
    margin-left: 12%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:auto 1fr;
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
    max-height:200px;
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



export default function List()
{
    const [data, setData] = useState([])
    useEffect(()=>{
        const getData = async () => {
            const response = await fetch('../mock_data/quiz_line.json')
            const result = await response.json()
            setData(result)
        }
        getData();
    },[])
    
    return(
        <Container>
            
            <TitleBlock>
                <span>Quiz</span>
            </TitleBlock>
            <Block title="need-to-do" type="popup" data= {data}>
            </Block>
            <Block title="finished" type="quiz" >

            </Block>
        </Container>
    )
}
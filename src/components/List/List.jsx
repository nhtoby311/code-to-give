import styled from 'styled-components'
import Block from '../Common/Block/Block'
import * as vars from '../../styles/var'
import { useContext, useEffect, useState } from 'react'
import { QuizContext, QuizProvider } from '../../context/QuizContext'

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
    @media (max-width:1124px)
    {
        grid-template-columns: 1fr;
        grid-template-rows:auto 1fr 1fr;
        grid-template-areas:
        "title"
        "need-to-do"
        "finished";
    }
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
    background: linear-gradient(126.58deg, #BBE416 6.53%, #49C41D 91.96%);
    border-radius: 25px;
    span{
        font-size: 3.5rem;
        font-weight: 600;
    }
    @media (max-width:500px)
    {
        span{
            font-size: 3rem;
        }
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
    @media (max-width:500px)
    {
        left: 20px;
        right: 20px;
        margin-left: 0px;
        width: auto;
    }
`



export default function List(props) {
    const { handleGameFetching, dataToDo, loadingToDo, dataFinished, loadingFinished, resetLoading } = useContext(QuizContext)

    useEffect(() => {
        resetLoading()
        handleGameFetching(props.game)
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <TitleBlock>
                <span>{props.game}</span>
            </TitleBlock>
            <Block data={dataToDo} loading={loadingToDo} title="need-to-do" type="popup" noti={true}>
            </Block>
            <Block data={dataFinished} loading={loadingFinished} title="finished" type="popup" noti={false}>
            </Block>
        </Container>
    )
}
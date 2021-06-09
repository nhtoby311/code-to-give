import { useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as vars from "../../../styles/var"
import Button from '../../Common/Button/Button'
const WindowDiv = styled.div`
    position: fixed;
    z-index: 90;
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
    opacity: 0;
    @media (max-width:750px)
    {
        margin: auto;
        width: auto;
        left: 30px;
        right: 30px;
    }
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
    @media (max-width:500px)
    {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4,1fr);
        p{
            text-align: left !important;
        }
    }
`

const Close = styled.h3`
    font-size: 1.5rem;
    position: absolute;
    top: 35px;
    right: 35px;
    cursor: pointer;
`
export default function Window(props) {
    return (

        <WindowDiv className="window" ref={props.windowRef}>
            <Close onClick={props.funcClose}>
                X
            </Close>
            <TitleWindow>
                <p>{props.quiz_name}</p>
            </TitleWindow>
            <Grid>
                <p>Time-limit: {props.time} minutes</p>
                <p>Point: {props.point}pts</p>
                <p>Due date: {props.date}</p>
                <p>Possible Attemps: {props.attempt}</p>
            </Grid>
            <Link to={`${props.path}/${props.id}`}>
                <Button content="start" pad="15px"></Button>
            </Link>
        </WindowDiv>
    )
}
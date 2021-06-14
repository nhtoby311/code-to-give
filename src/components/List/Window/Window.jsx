import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from '../../Common/Button/Button'
import Cross from "../../Common/Cross/Cross"

const WindowDiv = styled.div`
    position: fixed;
    z-index: 90;
    width: 40%;
    padding: 35px 45px;
    background: linear-gradient(271.53deg, #68c720 24.62%, #79da30 74.93%);
    border-radius: 35px;
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
    font-weight: 600;
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
    margin-top: 30px;
    margin-bottom: 80px;
    p{
        font-weight: 500;
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
    top: 45px;
    right: 45px;
    cursor: pointer;
`
export default function Window(props) {
    return (

        <WindowDiv className="window" ref={props.windowRef}>
            <Close onClick={props.funcClose}>
                <Cross/>
            </Close>
            <TitleWindow>
                <p>{props.data.quizName}</p>
            </TitleWindow>
            <Grid>
                <p>Time-limit: {props.data.maxTime && Math.round(props.data.maxTime/60)} minutes</p>
                <p>Point: {props.data.maxPoint}pts</p>
                <p>Due date: {props.data.dueDate && props.data.dueDate.substring(0,10)}</p>
                <p>Possible Attemps: {props.data.numberOfAttempt}</p>
            </Grid>

            {props.data.quizType === "Scribbly" ? (props.data.status === 'finished' ? (<Link to={`${props.data.quizType}/${props.data.status}/${props.data.quizId}`}>   {/*NEED `status` key in order to Link to correct route */} 
                <Button content="view" pad="15px"></Button>
            </Link>) : (<Link to={`${props.data.quizType}/${props.data.quizId}`}>    {/*Handle status of the quizline, 'finished' or 'to-do' */}
                <Button content="start" pad="15px"></Button>
            </Link>)) : (props.data.status === 'finished' ? (null) : (<Link to={`${props.data.quizType}/${props.data.quizId}`}>    {/*Handle status of the quizline, 'finished' or 'to-do' */}
                <Button content="start" pad="15px"></Button>
            </Link>))}
            
        </WindowDiv>
    )
}
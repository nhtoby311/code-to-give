import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import DescriptionBlock from '../Common/DescriptionBlock/DescriptionBlock'
import { ReactSketchCanvas } from "react-sketch-canvas"
import Pen from './Tools/Pen/Pen'
import Eraser from './Tools/Eraser/Eraser'
import Colors from './Tools/Colors/Colors'
import Undo from './Tools/Undo/Undo'
import Redo from './Tools/Redo/Redo'
import Clear from './Tools/Clear/Clear'
import { useLocation, useParams } from 'react-router'

const Container = styled.div`
    width: 80%;
    height: 85vh;
    margin-left: 12%;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "canvas canvas canvas block";
    @media (max-width:1200px)
    {
        grid-template-columns: 1fr;
        grid-template-rows: 90vh 1fr;
        grid-template-areas:
        "canvas"
        "block";
    }
    gap: 35px;
`
const CanvasContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    grid-area: canvas;
    display: flex;
    border-radius: 25px;
    overflow: hidden;
`

const CanvasToolCont = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 250px;
    padding: 20px 25px;
`
const CanvasTools = styled.div`
    width: 100%;
    height: 100%;
    background: var(--greenLightPlainColor);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10%;
    gap: 15px;
`

const styles = {
    border: "none",
};

<<<<<<< HEAD
export default function Scribbly()
{
    const [color,setColor] = useState('black')
    const [data,setData] = useState()
=======
export default function Scribbly({ match }) {
    const [color, setColor] = useState('black')
    const [data, setData] = useState()
>>>>>>> 632d748744d3c7170ce7aac06838e23dff885ea3

    const id = useParams().id               //get current id parameter from route
    const canvasRef = useRef(null)
    const parentCanvasRef = useRef(null)

    const fetchData = async () => {
        const response = await fetch('../../../mock_data/Scribbly.json')
        const result = await response.json()

<<<<<<< HEAD
        setData(result.filter((ele)=>{return (ele.id == id)}))
=======
        setData(result.filter((ele) => { return (ele.id == match.params.id) }))
>>>>>>> 632d748744d3c7170ce7aac06838e23dff885ea3
    }

    useEffect(() => {
        fetchData()
    }, [])



    const undoHandle = () => {
        canvasRef.current.undo()
    }
    const redoHandle = () => {
        canvasRef.current.redo()
    }
    const clearHandle = () => {
        canvasRef.current.clearCanvas()
    }
    const penHandle = () => {
        canvasRef.current.eraseMode(false)
    }
    const eraseHandle = () => {
        console.log(canvasRef.current)
        canvasRef.current.eraseMode(true)
    }

    const setColorHandle = (color) => {
        console.log(color)
        setColor(color)
    }


    return (
        <Container>
            <CanvasContainer ref={parentCanvasRef}>
                <ReactSketchCanvas
                    style={styles}
                    strokeWidth={4}
                    strokeColor={color}
                    eraserWidth={28}
                    ref={canvasRef}
                />
                <CanvasToolCont>
                    <CanvasTools>
                        <Undo func={undoHandle} />
                        <Pen func={penHandle} />
                        <Eraser func={eraseHandle} />
                        <Colors func={(e) => { setColorHandle(e) }} />
                        <Redo func={redoHandle} />
                        <Clear func={clearHandle} />
                    </CanvasTools>
                </CanvasToolCont>
            </CanvasContainer>
            <DescriptionBlock data={data} />
        </Container>
    )
}
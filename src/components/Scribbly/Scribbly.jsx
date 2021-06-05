import { useState, useRef } from 'react'
import styled from 'styled-components'
import DescriptionBlock from '../Common/DescriptionBlock/DescriptionBlock'
import {ReactSketchCanvas} from "react-sketch-canvas"
import Pen from './Tools/Pen/Pen'
import Eraser from './Tools/Eraser/Eraser'
import Colors from './Tools/Colors/Colors'
import Undo from './Tools/Undo/Undo'
import Redo from './Tools/Redo/Redo'
import Clear from './Tools/Clear/Clear'

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

export default function Scribbly()
{
    const [color,setColor] = useState('black')

    const canvasRef = useRef(null)
    const parentCanvasRef = useRef(null)



    const undoHandle = () =>{
        canvasRef.current.undo()
    }
    const redoHandle = () =>{
        canvasRef.current.redo()
    }
    const clearHandle = () =>{
        canvasRef.current.clearCanvas()
    }
    const penHandle = () =>{
        canvasRef.current.eraseMode(false)
    }
    const eraseHandle = () =>{
        console.log(canvasRef.current)
        canvasRef.current.eraseMode(true)
    }

    const setColorHandle = (color) =>
    {
        console.log(color)
        setColor(color)
    }


    return(
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
                        <Undo func={undoHandle}/>
                        <Pen func={penHandle}/>
                        <Eraser func={eraseHandle}/>
                        <Colors func={(e)=>{setColorHandle(e)}}/>
                        <Redo func={redoHandle}/>
                        <Clear func={clearHandle}/>
                    </CanvasTools>
                </CanvasToolCont>
            </CanvasContainer>
            <DescriptionBlock/>
        </Container>
    )
}
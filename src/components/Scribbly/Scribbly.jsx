import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import DescriptionBlock from '../Common/DescriptionBlock/DescriptionBlock'

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
`
const Canvas = styled.canvas`
    border: 2px solid red;
    background-color: white;
    border-radius: 25px;
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
    background: green;
    border-radius: 25px;
`


export default function Scribbly()
{
    
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = canvas.parentNode.offsetWidth *2
        canvas.height = canvas.parentNode.offsetHeight *2
        canvas.style.width = `${canvas.parentNode.offsetWidth}px`
        canvas.style.height = `${canvas.parentNode.offsetHeight}px`
        
        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle = 'blue'
        context.lineWidth = 5
        contextRef.current = context;



    },[])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX,offsetY} = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX,offsetY)
        setIsDrawing(true)
    }
    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }
    const draw = ({nativeEvent}) =>
    {
        if (!isDrawing)
        {
            return 
        }
        console.log(nativeEvent)
        const {offsetX,offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }

    const touchdraw = ({nativeEvent}) =>
    {
        console.log(nativeEvent)
    }

    return(
        <Container>
            <CanvasContainer>
                <Canvas onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onTouchMove={touchdraw}
                ref={canvasRef}></Canvas>
                <CanvasToolCont>
                    <CanvasTools/>
                </CanvasToolCont>
            </CanvasContainer>
            <DescriptionBlock/>
        </Container>
    )
}
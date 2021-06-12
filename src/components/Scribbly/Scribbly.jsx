import { useState, useRef, useEffect, useContext } from 'react'
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
import { QuizContext } from '../../context/QuizContext'

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

const linearSearch = (list, item) => {
    for (const element of list.entries()) {
      if (element[1].quizId === item) {
        return element[1]
      }
    }
}

export default function Scribbly()
{
    const [color,setColor] = useState('black')
    const [data,setData] = useState()
    const params = useParams() 

    const canvasRef = useRef(null)
    const parentCanvasRef = useRef(null)

    const {dataToDo} = useContext(QuizContext)
    const quizData = linearSearch(dataToDo,params.id)
    console.log(quizData)

    /*const fetchData = async () => {
        const response = await fetch('../../../mock_data/Scribbly.json')
        const result = await response.json()

        setData(result.filter((ele)=>{return (ele.id == id)}))
    }

    useEffect(() => {
        fetchData()
    }, [])*/



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


    const exportImage = async() => {
        const img = await canvasRef.current.exportImage("png")
        function dataURLtoFile(dataurl, filename) {                 //MAGIC
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), 
                n = bstr.length, 
                u8arr = new Uint8Array(n);
                
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            
            return new File([u8arr], filename, {type:mime});
        }

        const file = dataURLtoFile(img,'img.png');
        const formData = new FormData()  
        formData.append("studentWork",file)
        const response = await fetch (`https://code-to-give.herokuapp.com/api/scribbly/submit/${params.id}`,{
            method:"POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body:formData
        })
        const result = await response.json()
        console.log(result)
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
            <DescriptionBlock data={quizData} func={exportImage} />
        </Container>
    )
}
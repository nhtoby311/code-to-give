import { useState } from "react"
import styled from "styled-components"
import Letter from '../Common/Letter/Letter'
import Button from "../Common/Button/Button"

const LetterCont = styled.div`
     width:100%;
     display: flex;
     gap: 10px;
     justify-content: center;
     margin-bottom: 35px;
`

const Space = styled.div`
    width: 40px;
`

const BtnCont = styled.div`
    width: 100%;
`

export default function FillInBlankQuiz(props)
{
    const [arrayLetters,setArrayLetters] = useState([])
    //console.log(props.data)
    //console.log(props.data.answer.length)

    const Letters = [...props.data.answer]

    const handleAddValue = (e) =>{
        const temp = arrayLetters;              //Add Object to array of true
        temp.push(e)
        console.log(arrayLetters)
        setArrayLetters(temp)
    }

    const handleRemoveValue = (i) =>{
        let temp = arrayLetters;
        temp = temp.filter((ele)=>{return ele.ind !== i})       //remove an value with index of input send from Letter JSX{value:bool,ind:int}
        console.log(arrayLetters)
        setArrayLetters(temp)
    }

    const handleDone = ()=>{
        if(arrayLetters.filter((ele)=>ele.value===true).length === Letters.filter((ele)=>{return ele!== ' '}).length)        //If number of true inputs same as number of letter of answer minus space ' ', then correct
        {
            props.func()
        }
    }

    return (
        <>
            <LetterCont>
                    { props.data && Letters.map((ele,ind)=>{
                        //console.log(ele)
                        if(ele === " "){
                            return <Space key={ind}/>
                        }
                        else {
                            return <Letter 
                            ind = {ind}
                            color='yellow'
                            answer={ele} 
                            funcAdd={(e)=>handleAddValue(e)} 
                            funcRemove={(i)=>handleRemoveValue(i)}
                            key={ind}/>
                        }
                    })}
            </LetterCont>

            <BtnCont onClick={handleDone}>
                <Button content="Submit" pad="15px"/>
            </BtnCont>
        </>
    )
}
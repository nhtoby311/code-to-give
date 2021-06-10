import styled from 'styled-components'
import Button from '../../../Common/Button/Button'
import Letter from '../../../Common/Letter/Letter'

const LetterCont = styled.div`
     width:100%;
     display: flex;
     gap: 10px;
     justify-content: center;
     margin-bottom: 35px;
`

/*const Letter = styled.input`
    width: 30px;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    border-bottom: solid 2px yellow;
    padding: 5px;
    text-align: center;
    outline: none;
    text-transform: capitalize;
`*/
const BtnCont = styled.div`
    width: 100%;
`
const Space = styled.div`
    width: 40px;
`

export default function WriteQuiz(props)
{
    console.log(props.data)
    console.log(props.data.answer.length)

    const Letters = [...props.data.answer]



    return(
        <>
            <LetterCont>
                { props.data && Letters.map((ele)=>{
                    console.log(ele)
                    if(ele === " "){
                        return <Space/>
                    }
                    else {
                        return <Letter/>
                    }
                })}
            </LetterCont>
            <BtnCont onClick={props.func}>
                <Button content="Submit" pad="15px"/>
            </BtnCont>
        </>
    )
}
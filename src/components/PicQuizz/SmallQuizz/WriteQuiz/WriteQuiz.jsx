import styled from 'styled-components'
import Button from '../../../Common/Button/Button'

const LetterCont = styled.div`
     width:100%;
     display: flex;
     gap: 10px;
     justify-content: center;
     margin-bottom: 35px;
`

const Letter = styled.input`
    width: 30px;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    border-bottom: solid 2px yellow;
    padding: 10px;
    outline: none;
`
const BtnCont = styled.div`
    width: 100%;
`

export default function WriteQuiz(props)
{
    return(
        <>
            <LetterCont>
                <Letter type="text" maxLength="1"></Letter>
                <Letter type="text" maxLength="1"></Letter>
                <Letter type="text" maxLength="1"></Letter>
            </LetterCont>
            <BtnCont onClick={props.func}>
                <Button content="Submit" pad="15px"/>
            </BtnCont>
        </>
    )
}
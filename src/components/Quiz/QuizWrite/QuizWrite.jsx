import styled from 'styled-components'
import * as vars from '../../../styles/var'
const DivContent = styled.div`
width: 70%;
height: 350px;
background: ${vars.greenColor};
`

const DivAnswerCont = styled.div`
    width: 100%;
    display: flex;
    padding: 50px;
    justify-content: center;
    gap: 50px;
    border-radius: 25px;
    background: ${vars.greenColor};
`

const Letter = styled.input`
    width: 50px;
    background: transparent;
    border: none;
    border-bottom: solid 2px yellow;
    padding: 10px;
    outline: none;
    font-size: 2rem;
`

export default function QuizWrite()
{
    return(
        <>
            <DivContent/>
            <DivAnswerCont>
                {/* MOCK DATA, PROPS ARRAY */}
                <Letter type="text" maxLength="1"/>
                <Letter type="text" maxLength="1"/>
                <Letter type="text" maxLength="1"/>
                <Letter type="text" maxLength="1"/>
                <Letter type="text" maxLength="1"/>
            </DivAnswerCont>
        </>
    )
}
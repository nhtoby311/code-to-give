import styled from 'styled-components'
import * as vars from '../../../styles/var'
import Button from '../../Common/Button/Button'

const DivContent = styled.div`
width: 70%;
height: 350px;
background: ${vars.greenColor};
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${vars.greenColor};
    border-radius: 25px;
`

const DivAnswerCont = styled.div`
    width: 100%;
    display: flex;
    padding: 50px;
    justify-content: center;
    gap: 50px;
    
    
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

const ButtonDiv = styled.div`
    width: 20%;
    margin: 50px 0;
`

export default function QuizWrite(props)
{
    return(
        <>
            <DivContent/>
            <Wrapper>
                <DivAnswerCont>
                    {/* MOCK DATA, PROPS ARRAY */}
                    <Letter type="text" maxLength="1"/>
                    <Letter type="text" maxLength="1"/>
                    <Letter type="text" maxLength="1"/>
                    <Letter type="text" maxLength="1"/>
                    <Letter type="text" maxLength="1"/>
                </DivAnswerCont>
                <ButtonDiv onClick={props.funcNext}>
                    <Button  content="NEXT"/>
                </ButtonDiv>
            </Wrapper>
            
        </>
    )
}
import styled from 'styled-components'
import * as vars from '../../../styles/var'
import Button from '../../Common/Button/Button'
import img from '../../../assets/mock_assets/neptune.png'

const DivContent = styled.div`
    width: 60%;
    height: 550px;
    background: ${vars.greenColor};
    background: ${vars.greenColor};
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
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
    flex-wrap: wrap;
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
    text-transform: uppercase;
    font-weight: 600;
`

const ButtonDiv = styled.div`
    width: 20%;
    margin: 50px 0;
`

const QuizTask = styled.div`
    width: 100%;
    height: 100px;
    background: ${vars.greenColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    h3{
        font-size: 2rem;
    }
`


export default function QuizWrite(props)
{
    return(
        <>
            <QuizTask>
                <h3>What is this planet?</h3>
            </QuizTask>

            <DivContent img={img}/>
            <Wrapper>
                <DivAnswerCont>
                    {/* MOCK DATA, PROPS ARRAY */}
                    <Letter type="text" maxLength="1"/>
                    <Letter type="text" maxLength="1"/>
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
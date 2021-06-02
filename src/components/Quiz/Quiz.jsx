import styled from 'styled-components'
import * as vars from '../../styles/var'
//import QuizFour from './QuizFour/QuizFour'
import QuizWrite from './QuizWrite/QuizWrite'

const QuizCont = styled.div`
    width:80%;
    min-height: 95vh;
    margin-top: 60px;
    border: blue solid 1px;
    margin-left: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const QuizTask = styled.div`
    width: 100%;
    height: 100px;
    background: ${vars.greenColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`


export default function Quiz()
{
    return(
        <QuizCont>
            <QuizTask>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nisi!</h3>
            </QuizTask>
            <QuizWrite/>
            {/* <QuizFour/> */}
        </QuizCont>
    )
}
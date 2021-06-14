import styled from 'styled-components'

const AnswerDiv = styled.div`
    width: 100%;
    padding: 50px;
    background: ${(props) => {
        if (props.color !== undefined) { return props.color }
        else { return `var(--yellowPlainColor)` }
    }};;
    cursor: pointer;
    border-radius: 25px;
    p
    {
        font-size:1.2rem;
        font-weight: 600;
    }
`

export default function QuizAnswer(props)
{
    const handleColor = ()=>{
        switch(props.color){
            case 0:{
                return '#ff2525'
            }
            case 1:{
                return '#5d5dff'
            }
            case 2:{
                return '#ffff1e'
            }
            case 3:{
                return '#36ff32'
            }
            default:{
                return 'black'
            }
        }
    }

    return(
        <AnswerDiv color={handleColor()} onClick={props.funcNext}>
            <p>{props.content}</p>
        </AnswerDiv>
    )
}
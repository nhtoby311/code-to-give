import styled from "styled-components"
const AnswerDiv = styled.div`
    padding: 15px 25px;
    font-weight: 600;
    border-radius: 25px;
    background: ${(props) => {
        if (props.color !== undefined) { return props.color }
        else { return `var(--yellowPlainColor)` }
    }};;
    cursor: pointer;
`
export default function Answer(props)
{
    const handleColor = ()=>{
        switch(props.color){
            case 0:{
                return 'red'
            }
            case 1:{
                return 'blue'
            }
            case 2:{
                return 'yellow'
            }
            case 3:{
                return 'green'
            }
            default:{
                return 'black'
            }
        }
    }
    return (
        <AnswerDiv color={handleColor()} onClick={props.func}>
            {props.content}
        </AnswerDiv>
    )
}
import styled from 'styled-components'
import Button from '../Button/Button'

const Block = styled.div`
    width: 100%;
    height: 100%;
    background: var(--greenLightPlainColor);
    grid-area: block;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
`
const QuizTitle = styled.h3`
    font-size: 3rem;
    padding: 5px;
    color: var(--yellowPlainColor);
    border-bottom: solid white 2px;
`

const QuizDescriptions = styled.div`
    width: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`
const QuizDescription = styled.li`
    font-size: 1.1rem;
    margin-bottom: 15px;
`

const ButtonDiv = styled.div`
    width:100%;
`

export default function DescriptionBlock(props)
{
    console.log(props)
    return(
        <Block>
            <QuizTitle>
                Let's Draw
            </QuizTitle>
            <QuizDescriptions>              
                {/* ARRAY OF QUIZ DESCRIPTION */} {/* NEED TO REPLACE taksDescription to taskDescription*/}
                {props.data.taskDescription && props.data.taskDescription.map((ele,ind)=>{
                    return (<QuizDescription key={ind}>
                            {ele}
                        </QuizDescription>)
                })}
                
            </QuizDescriptions>
            <ButtonDiv onClick={props.func}>
                <Button content="Submit" pad="15px"/>
            </ButtonDiv>
        </Block>
    )
}
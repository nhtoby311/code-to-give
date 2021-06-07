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

export default function DescriptionBlock(props)
{
    return(
        <Block>
            <QuizTitle>
                Let's Draw
            </QuizTitle>
            <QuizDescriptions>              
                {/* ARRAY OF QUIZ DESCRIPTION */}
                <QuizDescription>
                    {props.data && props.data[0].quiz_name}
                </QuizDescription>
                <QuizDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, exercitationem!
                </QuizDescription>
                <QuizDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, exercitationem!
                </QuizDescription>
                <QuizDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, exercitationem!
                </QuizDescription>
                
            </QuizDescriptions>
            <Button content="abcs" pad="15px"/>
        </Block>
    )
}
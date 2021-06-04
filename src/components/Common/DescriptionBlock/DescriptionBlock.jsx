import styled from 'styled-components'
import Button from '../Button/Button'

const Block = styled.div`
    width: 100%;
    height: 100%;
    background: green;
    grid-area: block;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
`
const QuizName = styled.h3`
    font-size: 21px;
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

export default function DescriptionBlock()
{
    return(
        <Block>
            <QuizName>
                lmao
            </QuizName>
            <QuizDescriptions>              
                {/* ARRAY OF QUIZ DESCRIPTION */}
                <QuizDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, exercitationem!
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
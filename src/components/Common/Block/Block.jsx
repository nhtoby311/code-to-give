import styled from 'styled-components'
import BlockCards from './BlockCards/BlockCards'
import BlockQuiz from './BlockQuiz/BlockQuiz'
import TextBlock from './TextBlock/TextBlock'
import BlockPopup from './BlockPopup/BlockPopup'
import * as vars from '../../../styles/var'

const Blocked = styled.div`
        min-width:100%;     //to make the horizontal not passed to parent flex div
        // height:100%;
        max-height:500px;
        display:flex;
        flex-direction:column;
        background: ${vars.greenPlainLightColor};
        grid-area: ${props => props.title};
        padding: 25px 50px;
        border-radius: 25px;
        position: relative;
        @media screen and (max-width:500px)
        {
            max-height: none;
        }
    `
const H2 = styled.h2`
    text-transform: capitalize;
    margin-bottom: 12px;
`

export default function Block(props)
{
    const handleTypeContent = () =>
    {
        switch (props.type)
        {
            case 'slide':
                return <BlockCards data={props.data}/>
            case 'quiz':
                return <BlockQuiz data={props.data}/>
            case 'text':
                return <TextBlock data={props.data}/>
            case 'popup':
                return <BlockPopup data={props.data}/>
            default:
                return (null)
        }
    }

    return(
        <Blocked title = {props.title}>
            <H2>{props.title && props.title.replace('-',' ')}</H2>
            {handleTypeContent()} 
        </Blocked>
    )
}
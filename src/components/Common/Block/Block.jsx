import styled from 'styled-components'
import BlockCards from './BlockCards/BlockCards'
import BlockQuiz from './BlockQuiz/BlockQuiz'

const Blocked = styled.div`
        min-width:100%;     //to make the horizontal not passed to parent flex div
        // height:100%;
        max-height:500px;
        display:flex;
        flex-direction:column;
        background: green;
        grid-area: ${props => props.title};
        padding: 25px 50px;
        border-radius: 25px;
    `
const H2 = styled.h2`
    text-transform: capitalize;
    color: black;
    margin-bottom: 12px;
`

export default function Block(props)
{
    const handleTypeContent = () =>
    {
        switch (props.type)
        {
            case 'slide':
                return  <BlockCards/>
            case 'quiz':
                return <BlockQuiz/>
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
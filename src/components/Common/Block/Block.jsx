import styled from 'styled-components'
import BlockCards from './BlockCards/BlockCards'

const Blocked = styled.div`
        min-width:100%;     //to make the horizontal not passed to parent flex div
        // height:100%;
        height:400px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background: green;
        grid-area: ${props => props.title};
        padding: 25px 50px;
        border-radius: 25px;
    `
const H2 = styled.h2`
    text-transform: capitalize;
    color: black;
`

export default function Block(props)
{
    const handleTypeContent = () =>
    {
        switch (props.type)
        {
            case 'slide':
                return  <BlockCards/>
            default:
                return (null)
        }
    }

    return(
        <Blocked title = {props.title}>
            <H2>{props.title.replace('-',' ')}</H2>
            {handleTypeContent()}
        </Blocked>
    )
}
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
        background: ${(props) => {
        if (props.color !== undefined) { 
            switch(props.color){
                case 'grad-green':
                    return 'var(--greenGradientColor)'
                case 'orange-red':
                    return 'linear-gradient(110.47deg, #f1bf19 13.07%, #e78308 87.95%);'
                default :
                    return '#76BA1B'
            }}
        else { return `linear-gradient(126.58deg, #BBE416 6.53%, #49C41D 91.96%)` }
    }} ;
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
    font-size: 2.1rem;
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
                return <BlockPopup data={props.data} loading={props.loading} noti={props.noti}/>
            default:
                return (null)
        }
    }

    return(
        <Blocked color={props.color} title = {props.title}>
            <H2>{props.title && props.title.replace('-',' ')}</H2>
            {handleTypeContent()} 
        </Blocked>
    )
}
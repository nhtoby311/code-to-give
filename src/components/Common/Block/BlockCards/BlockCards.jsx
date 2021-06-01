import styled from 'styled-components'

const BlockCardDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
    overflow-x: auto;
    
`

const Test = styled.div`
        min-width:350px;
        height:100%;
        background:red;
        flex: 1;
    `

export default function BlockCards()
{
    return (
        <BlockCardDiv>
            <Test/>
            <Test/>
            <Test/>
        </BlockCardDiv>
    )
}
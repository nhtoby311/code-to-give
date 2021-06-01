import styled from 'styled-components'

const BlockCardDiv = styled.div`
    width: 100%;
    //height: 300px;
    display: flex;
    gap: 15px;
    overflow-x: auto;
    
`

const Test = styled.div`
        min-width:250px;
        max-width: 260px;
        height:250px;
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
            <Test/>
        </BlockCardDiv>
    )
}
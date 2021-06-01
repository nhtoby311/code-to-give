import styled from "styled-components"
const Tbx = styled.div`
    width: 100%;
    margin-top: 20px;
    overflow: scroll;

`
const Line = styled.p`

`

export default function TextBlock(props) {
    return (
        <>
            <ul>
               {props.data.map(l )}
            </ul>
        </>
    )
}
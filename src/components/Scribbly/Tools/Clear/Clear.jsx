import styled from 'styled-components'

const Circle = styled.div`
    padding: 7px 11px;
    display: flex;
    background:red;
    border-radius: 50%;
    cursor: pointer;
`

export default function Clear(props)
{
    return (
        <Circle onClick={props.func}>
            <p>X</p>
        </Circle>
    )
}
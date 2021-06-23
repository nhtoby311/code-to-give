import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    cursor: pointer;
`

const Bubble = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
`
const Descrip = styled.h4`
    font-size: 1rem;
    margin-left: 20px;
`

export default function Add(props){
    return(
        <Container onClick={props.func}>
            <Bubble></Bubble>
            <Descrip>{props.label}</Descrip>
        </Container>
    )
}
import styled from 'styled-components'
import Input from '../../../Common/Input/Input'
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 55px;
`

export default function Create(){
    return(
        <Container>
            <h3>Assignment - Create Assignment</h3>
            <Form>
                <Input label="Quiz Name"></Input>
                <Input label="Game"></Input>
                <Input label="Quiz Type"></Input>
            </Form>
        </Container>
    )
}
import styled from 'styled-components'
import BlockCard from '../../Common/BlockCard/BlockCard'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
`
const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
`

export default function Assignment(){
    return (
        <Container>
            <h2>Assignment</h2>
            <ContentContainer>
                <BlockCard label='Create Assignment' link='create'/>
                <BlockCard label='Assignment List' link='list'/>
            </ContentContainer>
        </Container>
    )
}
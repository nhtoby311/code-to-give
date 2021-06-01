import styled from 'styled-components'
import Block from '../../components/Common/Block/Block'
import ProfileBlock from '../../components/Common/ProfileBlock/ProfileBlock'
const Container = styled.div`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "profile profile"
    "recent-grades top-grades";
`


export default function Profile()
{
    return(
        <Container className="container">
            <ProfileBlock></ProfileBlock>
            {/* <Block title="profile"></Block> */}
            <Block title="recent-grades" type="quiz"></Block>
            <Block title="top-grades" type="quiz"></Block>
        </Container>
    )
}
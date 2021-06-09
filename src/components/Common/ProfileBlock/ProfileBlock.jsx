import styled from "styled-components"
import Button from "../Button/Button"
import * as vars from "../../../styles/var"
import { useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"

const Pf = styled.div`
    width: 100%;
    height: 100%;
    min-height: 450px;
    grid-area: profile;
    position: relative;
    background-color: white;
    overflow: hidden;
    border-radius: 25px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`
const Avatar = styled.img`
    position: absolute;
    width: 250px;
    height: 250px;
    top:-230px;
    left: 30px;
    background-color: gray;
    border-radius: 15px;
    `
const Name = styled.h3`
    position: absolute;
    top:-40px;
    left: 300px;
    font-size: 1.5rem;
    text-transform: uppercase;
`
const Badge = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: ${vars.greenColor};
    p 
    {
        margin-top: 50px;
        margin-left: 50px;
        width: 40%;
    }
    `
const InforContainer = styled.div`
    position: relative;
    width: 100%;
    `
const DivOuter = styled.div`
    display:flex;
    padding-right: 40px;
    justify-content: space-between;
    height: 100%;
    position: relative;
    `
const DivInner = styled.div`
    width: 200px;
    padding-top: 80px;
`
export default function ProfileBlock(props) {
    const {logout} = useContext(AuthContext)

    return (
        <>
            <Pf img={props.data && props.data.coverPhotoURL}>
                <Badge>
                    <InforContainer>
                        <Avatar src={props.data && props.data.avatarURL}></Avatar>
                        <Name>{props.data && props.data.firstName +" "+ props.data.lastName}</Name>
                    </InforContainer>
                    <DivOuter>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, enim veritatis! Placeat fugiat impedit animi hic praesentium nobis molestias minima aut architecto a nostrum ea veniam, laudantium cumque ex neque.</p> 
                        <DivInner onClick={logout}>
                        <Button content="Edit Profile"></Button>
                        </DivInner>
                    </DivOuter>
                    </Badge>
            </Pf>
        </>
    )
}
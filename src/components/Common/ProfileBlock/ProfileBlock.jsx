import styled from "styled-components"
import Button from "../Button/Button"
import * as vars from "../../../styles/var"
import { useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const Pf = styled.div`
    width: 100%;
    min-height: 500px;
    grid-area: profile;
    position: relative;
    background-color: white;
    border-radius: 25px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`
const Avatar = styled.img`
    position: absolute;
    width: 250px;
    height: 250px;
    background-color: gray;
    border-radius: 15px;
    z-index: 90;
    @media (max-width:500px)
    {
        width: 100%;
        position: static;
    }
    `
const Name = styled.h3`
    padding: 0px 40px 50px;
    margin-left: 250px;
    font-size: 1.5rem;
    text-transform: uppercase;
    z-index: 90;
    @media (max-width:500px){
        margin-top: 30px;
        padding:  10px 0px;
        margin: auto;
        position: static;
    }

`
const Badge = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    padding-left: 70px;
    padding-top: 70px;
    padding-bottom: 70px;
    display: grid;
    grid-template-columns: 40% 200px;
    align-items: flex-end;
    border-radius: 0 0 25px 25px;
    justify-content: space-between;
    background: ${vars.greenColor};
    p 
    {

    }
    @media (max-width:500px)
    {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        padding: 70px 30px 10px;
        row-gap: 30px;

    }
    `
const InforContainer = styled.div`
    width: 100%;
    padding: 20px 30px 10px 70px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    @media (max-width:500px)
    {
        flex-direction: column;
        padding: 20px;
        align-items: center;
    }
    `
function getWidth(a) {
    return a.offsetWidth;
}
export default function ProfileBlock(props) {
    const {logout} = useContext(AuthContext)
    const pf = useRef(null)
    const bd = useRef(null)
    const inforRef = useRef(null)
    const avaRef = useRef(null)
    useEffect(() => {
        const tmp = bd.current.offsetHeight;
        if (window.innerWidth > 500)
            gsap.to(inforRef.current, {
                duration:0,
                bottom: tmp - 50,
            })
        gsap.to(avaRef.current, {
            height: getWidth(avaRef.current),
        })
        if (window.innerWidth < 500) {
            gsap.to(pf.current, {
                height: tmp + avaRef.current.offsetHeight +100,
            })
        }
        else {
            gsap.to(pf.current, {
                height: tmp + avaRef.current.offsetHeight + 50 ,
            })
        }

    }, [])

    return (
        <>
            <Pf img={props.data && props.data.coverPhotoURL} ref={pf}>
                    <InforContainer ref={inforRef}>
                        <Avatar ref={avaRef} src={props.data && props.data.avatarURL}></Avatar>
                        <Name>{props.data && props.data.firstName +" "+ props.data.lastName} Tran Toan</Name>
                    </InforContainer>
                    <Badge ref={bd}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, enim veritatis! Placeat fugiat impedit animi hic praesentium nobis molestias minima aut architecto a nostrum ea veniam, laudantium cumque ex neque.</p> 
                        <div onClick={logout}>
                            <Button pad="10px" content="Edit Profile"></Button>
                        </div>
                    </Badge>
            </Pf>
        </>
    )
}
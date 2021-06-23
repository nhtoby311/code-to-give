import styled from 'styled-components'
import TitleCard from "./TitleCard/TitleCard"
import "./LeaderboardItem.scss"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from "gsap/gsap-core"
const Item = styled.div`
        gap:10px;
        width:100%;
        background:yellow;
        margin:12px 0;
        border-radius: 12px;
        padding: 15px 15px;
        cursor: pointer;
`
const Hline = styled.div`
    background-color: white;
    height: 2px;
    width: 100%;
    margin:20px 0px;
`
const Content = styled.div`
    overflow: hidden;
    height: 0px;
`
export default function LeaderboardItem() {
    const [expandItem, setExpandItem] = useState(false)
    const itemRef = useRef(null)

    useEffect(() => {
        if (expandItem === false) {
            const tmp = itemRef.current.childNodes[1]
            gsap.to(tmp, {
                height: "0px",
            })
        }
        else {
            const tmp = itemRef.current.childNodes[1]
            gsap.to(tmp, {
                height: tmp.scrollHeight,
            })
        }
    }, [expandItem])
    return (
        <Item ref={itemRef} onClick={()=>{setExpandItem(!expandItem)}}>
            <p>quiz</p>
            <Content>
                <Hline></Hline>
                <TitleCard rank="gold"></TitleCard>
                <TitleCard rank="silver"></TitleCard>
                <TitleCard rank="bronze"></TitleCard>
            </Content>
        </Item>
    )
}
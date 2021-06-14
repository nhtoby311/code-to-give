import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SMItem from "./SMItem/SMItem";
const SmMenu = styled.div`
    position: fixed;
    padding: 20px;
    background:var(--yellowPlainColor);
    left: 120px;
    top: 20px;
    border-radius: 20px;
    border: 8px solid var(--brownColor);
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.36);
    opacity: 0;
`


export default function SmallMenu(props)
{   
    const menuRef = useRef(null);

    
    useEffect(()=>{
        if(props.isShow === true)
        {
            gsap.to(menuRef.current,{
                duration:0.5,
                pointerEvents:"auto",
                opacity: 1,
            })
        }
        else
        {
            gsap.to(menuRef.current, {
                duration:0.5,
                pointerEvents:"none",
                opacity: 0,
            })
        }
    },[props.isShow])

        return(
        <SmMenu ref={menuRef}>
            {props.itemList.map((ele,ind)=>{return <SMItem key={ind} close={props.close} data={ele}/>})}
        </SmMenu>
    );
}
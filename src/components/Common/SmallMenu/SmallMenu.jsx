import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const SmMenu = styled.div`
    position: fixed;
    padding: 20px;
    background:var(--yellowPlainColor);
    left: 120px;
    top: 20px;
    border-radius: 20px;
    border: 3px solid var(--brownColor);
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.36);
`
const SmMenuItem =styled.div`
    padding: 10px 50px;
    text-align: center;
    margin: 10px 0px;
    border-radius: 10px;
    transition: 0.2s ease;
    &:hover {
        background-color: rgba(0,0,0,0.3);
    }
`
function ItemList(props)
{
    const list = props.itemList;
    const listRepr = list.map((ele,ind)=><SmMenuItem key={ind}><p>{ele}</p></SmMenuItem>);
    return(
        <>
        {listRepr}
        </>
    )
}
function neg(a)
{
    return (!a);
}
export default function SmallMenu(props)
{   
    const menuRef = useRef(null);
    
    useEffect(()=>{
        if(props.isShow === true)
        {
            gsap.to(menuRef.current,{
                duration:"0",
                opacity: "1",
            })
        }
        else
        {
            gsap.to(menuRef.current, {
                duration:"0",
                opacity: "0",
            })
        }
    },[props.isShow])
        return(
        <SmMenu ref={menuRef}>
            <ItemList itemList = {props.itemList}></ItemList>
        </SmMenu>
    );
}
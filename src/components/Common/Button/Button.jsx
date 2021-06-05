import styled from "styled-components"
import * as vars from '../../../styles/var'
const Btn = styled.button`
        padding: ${(props) => {
        if (props.pad != undefined) { return props.pad }
        else { return `10px` }
    }} 30px;
        //padding: ${(props) => { return props.pad }} 30px;
        border:none;
        background: #FFD652;
        width:100%;
        border-radius: 10px;
        text-transform:uppercase;
        cursor:pointer;
        color: var(--blackColor);
        transition:0.5s;
        font-style: normal;
        font-weight: bold;
        font-size: 1.1rem;
        &:hover {
            background:#FF9500;
        }
        `
export default function Button(props) {
    return (
        <Btn pad={props.pad}>{props.content}</Btn>
    )
}
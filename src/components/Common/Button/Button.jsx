import "./Button.scss"
import styled from "styled-components"
export default function Button(props) {
    const Button = styled.button`
        padding-top:10px;
        padding-bottom:10px;
        border:none;
        background: #FFD652;
        width:100%;
        border-radius: 10px;
        text-transform:uppercase;
        cursor:pointer;
        transition:0.5s;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        &:hover {
            background:#FF9500;
        }
        `
    return (
        <div>
            <Button>{props.content}</Button>
        </div>
    )
}
import styled from "styled-components"
const Btn = styled.button`
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
        font-size: 1.1rem;
        &:hover {
            background:#FF9500;
        }
        `
export default function Button(props) {
    
    return (
        <div>
            <Btn>{props.content}</Btn>
        </div>
    )
}
import "./Button.scss"
import styled from "styled-components"
export default function Button() {
    const Button = styled.button`
        border-radius: 10px;
        padding:10px 20px;
        margin-left:300px;
        width: 20%;
        border:none;
    `
    return (
        <div>
            <Button>Test</Button>
        </div>
    )
}
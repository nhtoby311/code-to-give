import styled from "styled-components"
const Noti = styled.div`
    background: #FF523A;
    color: white;
    border-radius: 50%;
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: ${(props) => { if (props.pad != undefined) { return props.pad } else return `10px`}};
    top:${(props)=>{
        if(props.top!=undefined)
        {
            return props.top;
        }
        else return `0px`
    }};
    left:${(props)=>{
        if(props.left!=undefined)
        {
            return props.left
        }
        else return `0px`
    }};
`
export default function Notification(props) {
    return (
        <Noti top={props.top} left={props.left} pad={props.pad}>{props.content}</Noti>
    )
}
import { useEffect, useState } from "react"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    align-items: center;
    p{
        font-size: 25px;
        cursor: pointer;
    }
`

const EmojiNum = styled.h4`
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    font-size: 1.15rem;
    color: ${props => {
        if(props.status === true){
        return 'red'
    }else{
        return 'var(--blackColor)'
    }}};
`

export default function Emoji(props){
    const [emojiState,setEmojiState] = useState(props.isVoted)
    const [count,setCount] = useState(props.count)

    return(
        <Div onClick={()=>{
            setEmojiState(!emojiState)
            if(emojiState){
                setCount(count-1)
            }else{
                setCount(count+1)
            }
            props.submitFunc()
        }}>
            <p>{props.emoji}</p>
            <EmojiNum status={emojiState}>{count}</EmojiNum>
        </Div>       
    )
}
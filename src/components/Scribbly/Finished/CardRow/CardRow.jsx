import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Emoji from "../../../Common/Emoji/Emoji"

const Card = styled.div`
    width: 100%;
    padding: 15px 20px;
    border-radius: 25px;
    background: #F0F0F0;
    display: flex;
    justify-content: space-between;
`

const User = styled.div`
    display: flex;
    flex-direction: column;
`
const UserGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr; 
    grid-template-rows: auto 1fr; 
    grid-template-areas: 
    "avatar name"
    "avatar date"; 
    h2{
        grid-area: name;
        font-size: 1.3rem;
    }
    h4{
        font-size: 0.8rem;
        position: absolute;
        bottom: 0;
    }
`

const UserAvatar = styled.div`
    grid-area:avatar;
    width: 55px;
    height: 55px;
    background: grey;
    border-radius: 15px;
    margin-right: 10px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`

const H4div = styled.aside`
    position: relative;
    grid-area: date;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto; 
    grid-template-rows: 1fr auto; 
    gap: 25px; 
    grid-template-areas: 
    "title avatar"
    "emojis avatar"; 
    h2{
        grid-area: title;
        font-size: 2rem;
    }
`
const Pic = styled.div`
    grid-area: avatar;
    width: 200px;
    height:150px;
    background: #b6b6b6;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    cursor: pointer;
`
const Emojis = styled.div`
    grid-area: emojis;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    div{
        display: flex;
        align-items: center;
    }
    p{
        font-size: 25px;
        cursor: pointer;
    }
`

const EnlargePic = styled.div`
    position: fixed;
    z-index: 90;
    left: 50%;
    top: 18%;
    margin-left: -30%;
    width: 60vw;
    height: 70vh;
    background: #b6b6b6;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    box-shadow: 12px 10px 10px 7px rgba(0,0,0,0.25);
    opacity: 0;
    cursor: pointer;
`



export default function CardRow(props){
    console.log(props.data)
    const [enlarge,setEnlarge] = useState(false)
    const enlargeRef = useRef(null)

    const togglePic = ()=>{
        console.log("yetet")
        setEnlarge(!enlarge)
    }

    useEffect(()=>{                 //Animating enlarge image
        console.log(enlarge)
        if(enlarge){
            gsap.to(enlargeRef.current,{
                opacity: 1,
                pointerEvents:'auto',
                duration:0.4
            })
        }
        else{
            gsap.to(enlargeRef.current,{
                opacity: 0,
                pointerEvents:'none',
                duration:0.4
            })
        }
    },[enlarge])

    const handleEmojiAPI = async (url) =>{
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body:{}
        })
        const result = await response.json()
        console.log(result)
    }

    return(
        <Card>
            <EnlargePic onClick={togglePic} ref={enlargeRef} img={props.data && props.data.studentWorkURL}/>
            <User>
                <UserGrid>
                    <UserAvatar img={props.data.author[0].avatarURL}/>
                    <h2>{props.data.author && props.data.author[0].firstName + " " + props.data.author[0].lastName}</h2>
                    <H4div>
                        <h4>24 April 2021</h4>
                    </H4div>
                </UserGrid>
            </User>
            <Grid>
                {/* <h2>MY ART</h2> */}
                <Emojis>
                    <Emoji count={props.data.loveReact} 
                    submitFunc={()=>handleEmojiAPI(props.data.loveReactAPI_URL)}
                    isVoted={props.data.isLoveVoted}
                    emoji="😍" />
                    <Emoji count={props.data.hahaReact} 
                    submitFunc={()=>handleEmojiAPI(props.data.hahaReactAPI_URL)} 
                    isVoted={props.data.isHahaVoted}
                    emoji="😂" />
                    <Emoji count={props.data.wowReact} 
                    submitFunc={()=>handleEmojiAPI(props.data.wowReactAPI_URL)}
                    isVoted={props.data.isWowVoted} 
                    emoji="😲" />
                </Emojis>
                <Pic onClick={togglePic} img={props.data.studentWorkURL}/>
            </Grid>
        </Card>
    )
}
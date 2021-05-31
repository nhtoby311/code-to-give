import styled from "styled-components"
export default function Avatar (props)
{
    const Point = styled.p`
    position: absolute;
    bottom:0;
    right:0;
    font-weight: bold;
    font-size: 57px;
    `
    const ImageContainer = styled.div`
        background-color: #aeb4b7;
        position:relative;
        overflow:hidden;
        border-radius:25px;
        width: 243px;
        height: 272px;    
        `
    const Avatar = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center ;
    `
    const Name = styled.p`
    margin-top:10px;
    font-size:1.6rem;
    `
    return(
        <div>
            <Avatar>
                <ImageContainer>
                    <Point>{props.point}pts</Point>
                </ImageContainer>
                <Name>{props.name}</Name>
            </Avatar>
        </div>
    )
}
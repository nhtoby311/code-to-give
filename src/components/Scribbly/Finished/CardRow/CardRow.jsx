import styled from "styled-components"

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
    div{
        grid-area:avatar;
        width: 55px;
        height: 55px;
        background: grey;
        border-radius: 15px;
        margin-right: 10px;
    }
    h2{
        grid-area: name;
        font-size: 1.3rem;
    }
    h3{
        position: relative;
        grid-area: date;
    }
    h4{
        font-size: 0.8rem;
        position: absolute;
        bottom: 0;
    }
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
const Avatar = styled.div`
    grid-area: avatar;
    width: 200px;
    height:150px;
    background: grey;
    border-radius: 15px;
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
    }
    h4{
        margin-top: 0.3rem;
        font-size: 1.15rem;
    }
`



export default function CardRow(){
    return(
        <Card>
            <User>
                <UserGrid>
                    <div></div>
                    <h2>User_6969</h2>
                    <h3>
                        <h4>24 April 2021</h4>
                    </h3>
                </UserGrid>
            </User>
            <Grid>
                <h2>MY ART</h2>
                <Emojis>
                    <div>
                        <p>😍</p>
                        <h4>123</h4>
                    </div>
                    <div>
                        <p>😂</p>
                        <h4>123</h4>
                    </div>
                    <div>
                        <p>😲</p>
                        <h4>123</h4>
                    </div>
                </Emojis>
                <Avatar/>
            </Grid>
        </Card>
    )
}
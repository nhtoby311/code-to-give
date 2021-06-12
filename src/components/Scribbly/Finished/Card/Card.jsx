import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`
const Pic = styled.div`
    width: 100%;
    height: 250px;
    background: grey;
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

const Date = styled.h4`
    font-size: 1.1rem;
`
const TeacherCmt = styled.p`
    font-size: 1rem;
`
const Grade = styled.div`
    width: 40%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    background: var(--yellowColor);
    border-radius: 25px;
    span{
        font-size: 2rem;
        font-weight: 600;
    }
`

export default function Card(){
    return(
        <Div>
            <Pic/>
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
            <Date>
                24 April 2021
            </Date>
            <TeacherCmt>
                @teacher said: lmao bruh bruh
            </TeacherCmt>
            <Grade>
                <span>689</span>
            </Grade>
        </Div>
    )
}
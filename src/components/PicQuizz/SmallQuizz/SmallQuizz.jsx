import styled from "styled-components"
const SmQuizz = styled.div`
    background: #77BC1F;
    border: 2px solid #FFD42A;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    .lable 
    {
        background: linear-gradient(180deg, #FF9500 , #E8BB09 );
        width: 70px;
        height:70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p 
    {
        font-size: 2rem;
    }
    &:hover{
        background: #3CA915;
    }
`
export default function SmallQuizz(props) {
    return (
        <SmQuizz>
            <div className="lable">
                <p>
                    {props.number}
                </p>
                
            </div>
        </SmQuizz>
    )
}
import styled from "styled-components"
function Setcolor (rank)
{
    if(rank === "gold")
    {
        return "#FFD700";
    }
    if(rank=== "silver")
    {
        return "#C0C0C0";
    }
    if(rank=== "bronze")
    {
        return "#cd7f32";
    }
}
const TCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => {return((props.rank !== undefined) ? Setcolor(props.rank) :"white")}};
    width: 100%;
    padding:10px;
    border-radius: 10px;
    align-items: center;
    margin: 10px 0px;
`
const SmallPic = styled.div`
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius:7px;
`
const SmallInfo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export default function TitleCard(props) {
    return (
        < TCard rank={props.rank} >
            <SmallInfo>
                <SmallPic></SmallPic>
                <p>name</p>
            </SmallInfo>
            <p>12pts</p>
        </ TCard>
    )
}
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 150px;
    max-height: 100%;
    flex-wrap: wrap;
    gap: 8px;
`

const Color = styled.div`
    width: 25px;
    height: 25px;
    background: ${(props) =>{return props.color}};
    box-shadow: 5px 7px 14px -1px rgba(0,0,0,0.21);
`

export default function Colors(props)
{
    const colors = ['#fe0000', '#1060ff', '#fef200', '#24b550', 'brown', '#7a1fa0','#fe8f00','black']

    return(
        <Container>
            {colors && colors.map((ele,ind)=>{
                return <Color onClick={()=>{props.func(ele)}} key={ind} color={ele} />
                })}
        </Container>
    )
}
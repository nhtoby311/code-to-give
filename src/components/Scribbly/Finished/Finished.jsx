import styled from "styled-components"
import Card from "./Card/Card"
import CardRow from "./CardRow/CardRow"

const Container = styled.div`
    width: 80%;
    margin-left: 12%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:auto 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "title title title title title title title title"
        "your-classmates your-classmates your-classmates your-classmates your-classmates your-submission your-submission your-submission";
    @media (max-width:1124px)
    {
        grid-template-columns: 1fr;
        grid-template-rows:auto 1fr 1fr;
        grid-template-areas:
        "title"
        "your-classmates"
        "your-submission";
    }
    grid-gap: 50px 30px;
    margin-top: 150px;
` 

const TitleBlock = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    max-height:200px;
    justify-content: center;
    align-items: center;
    grid-area: title;
    background: linear-gradient(126.58deg, #BBE416 6.53%, #49C41D 91.96%);
    border-radius: 25px;
    span{
        font-size: 3.5rem;
        font-weight: 600;
    }
`

const Blocked = styled.div`
        min-width:100%;     //to make the horizontal not passed to parent flex div
        // height:100%;
        max-height:600px;
        display:flex;
        flex-direction:column;
        background: ${(props) => {
        if (props.color !== undefined) { 
            switch(props.color){
                case 'grad-green':
                    return 'var(--greenGradientColor)'
                case 'orange-red':
                    return 'linear-gradient(110.47deg, #f1bf19 13.07%, #e78308 87.95%);'
                default :
                    return '#76BA1B'
            }}
        else { return `linear-gradient(126.58deg, #BBE416 6.53%, #49C41D 91.96%)` }
    }} ;
        grid-area: ${props => props.title};
        padding: 25px 50px;
        border-radius: 25px;
        position: relative;

        @media screen and (max-width:500px)
        {
            max-height: none;
        }
`

const Cont = styled.div`
    overflow-y: auto;
    display:flex;
    flex-direction:column;   
    padding-right : 25px;
    gap: 35px;
`

const H2 = styled.h2`
    font-size: 2.1rem;
    text-transform: capitalize;
    margin-bottom: 12px;
`

export default function Finished(){
    return (
        <Container>
            <TitleBlock>
                <span>Quiz</span>
            </TitleBlock>
            <Blocked title="your-classmates">
                <H2>Your Classmates</H2>
                <Cont>
                    <CardRow/>
                    <CardRow/>
                    <CardRow/>
                </Cont>
            </Blocked>
            <Blocked title="your-submission">
                <H2>Your submission</H2>
                <Card/>
            </Blocked>
        </Container>
    )
}
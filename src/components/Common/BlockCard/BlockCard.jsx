import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    width: 500px;
    background: #afafaf;
    padding-bottom: 70px;
    gap: 50px;
    border-radius: 25px;
    h3{
        font-size: 4.2rem;
    }
`

const Button = styled.button`
    width:40%;
    padding: 15px;
    background: transparent;
    border: var(--greenLightPlainColor) solid 3px;
    transition: background 0.3s;
    span{
        font-size: 0.9rem;
        font-weight: 600;
        color: white;
    }
    &:hover{
        background: var(--greenLightPlainColor);
    }
`

export default function BlockCard(props){
    const location = useLocation()
    return(
        <Card>
            <h3>{props.label}</h3>
            <Link to={`${location.pathname}/${props.link}`}>
                <Button>
                    <span>View</span>
                </Button>
            </Link>
        </Card>
    )
}
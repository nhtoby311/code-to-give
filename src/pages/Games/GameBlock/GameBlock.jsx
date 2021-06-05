import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as vars from '../../../styles/var'

const GameBlockDiv = styled.div`
    width: 100%;
    position: relative;
    height: 500px;
    background : ${vars.greenColor};
    border-radius: 25px;
`
const Title = styled.h3`
    font-size: 5rem;
    top: 30px;
    left: -60px;
    position: absolute;
`

export default function GameBlock(props)
{
    const toString = () => {
        return props.title.replace("-"," ")
    }

    return (
        <Link to={`/games/${props.title}`}>
            <GameBlockDiv>
                <Title>{toString()}</Title>
            </GameBlockDiv>
        </Link>
    )
}
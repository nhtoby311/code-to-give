import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as vars from '../../../styles/var'

const GameBlockDiv = styled.div`
    width: 100%;
    position: relative;
    height: 500px;
    background : ${vars.greenColor};
`
const Title = styled.h3`
    font-size: 5rem;
    top: 30px;
    left: -60px;
    position: absolute;
`

export default function GameBlock(props)
{
    return (
        <Link to="/games/quiz">
            <GameBlockDiv>
                <Title>{props.title}</Title>
            </GameBlockDiv>
        </Link>
    )
}
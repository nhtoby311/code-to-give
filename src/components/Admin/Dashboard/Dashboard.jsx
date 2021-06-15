import mock from './dashboard_mock.png'
import styled from 'styled-components'

const IMG = styled.img`
    width: 100%;
`

export default function Dashboard(){
    return(
        <IMG src={mock}>
        </IMG>
    )
}
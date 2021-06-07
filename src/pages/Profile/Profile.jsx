import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Block from '../../components/Common/Block/Block'
import ProfileBlock from '../../components/Common/ProfileBlock/ProfileBlock'
const Container = styled.div`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "profile profile"
    "recent-grades top-grades";
`


export default function Profile()
{

    const[recentGradesData,setRecentGradesData] = useState([])
    const[topGradesData,setTopGradesData] = useState([])

    const getData = () =>
    {
        const getUserData = async()=>
        {
            const response = await fetch('https://code-to-give.herokuapp.com/users/vantoan_19')
            const result = await response.json()
            console.log(result)
        }

        const getRecentGradesData = async()=>
        {
            const response = await fetch('./mock_data/recent_grades.json')
            const result = await response.json()
            setRecentGradesData(result)
        }
        const getTopGradesData = async()=>
        {
            const response = await fetch('./mock_data/recent_grades.json')
            const result = await response.json()
            setTopGradesData(result)
        }

        getRecentGradesData()
        getTopGradesData()
        getUserData()
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <Container className="container">
            <ProfileBlock name="lorem"></ProfileBlock>
            {/* <Block title="profile"></Block> */}
            <Block title="recent-grades" type="quiz" data={recentGradesData}></Block>
            <Block title="top-grades" type="quiz" data={topGradesData}></Block>
        </Container>
    )
}
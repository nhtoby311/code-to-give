import Block from '../../components/Common/Block/Block';
import './Home.scss'
import { useEffect, useState } from 'react';

export default function Home() {
    const [newAssignmentData,setNewAssignmentData] = useState([])
    const [reminderData,setReminderData] = useState([])
    const [bestStudentData,setBestStudentData] = useState([])
    const getData = ()=>
    {
        const getNewAssignmentData = async()=>
        {
        const response = await fetch('./mock_data/new_assignment.json')
        const result = await response.json()
        setNewAssignmentData(result)
        }

        const getReminderData = async()=>
        {
        const response = await fetch('./mock_data/reminder.json')
        const result = await response.json()
        setReminderData(result)
        }

        const getBestStudentData = async()=>
        {
        const response = await fetch('./mock_data/best_student.json')
        const result = await response.json()
        setBestStudentData(result)
        }

        getNewAssignmentData()
        getReminderData()
        getBestStudentData()
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div className="container home-cont">
            <Block title="new-assignment" color="" type="text" data={newAssignmentData}/>
            <Block title="reminder" color="orange-red" type="text" data={reminderData}/>
            <Block title="recent-finished" color="yellow-orange" type="slide" data={bestStudentData}/>
        </div>
    )
}
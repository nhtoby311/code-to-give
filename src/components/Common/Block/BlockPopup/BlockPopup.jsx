import styled from 'styled-components'
import QuizLine from '../../../Common/QuizLine/QuizLine'
import Notification from '../../../Common/Notification/Notification'
import { useState } from 'react'
import Loading from '../../../Common/Loading/Loading'

const QuizContainer = styled.div`
    width: 100%;
    gap: 35px;
    overflow-y: auto;
    max-height: 600px;
    position: relative;
    padding-right: 30px;
`

export default function BlockPopup({data,loading,noti}) {
    const [currentWindow,setCurrentWindow] = useState('')       //When click on another window, will close the previous one
    //const {data,loading} = useContext(QuizContext)
    const Noti = () => {
        if(noti){
            return (<Notification pad='5px' top='30px' left='250px' content={data.length} />)
        }
        else {
            return (null)
        }
    }

    return (
        <> 
            {Noti()}
            <QuizContainer>
                {loading ? <Loading/> : 
                data && data.map((element, ind) => {
                    return (<QuizLine key={ind}
                        data={element}
                        cur={currentWindow} 
                        funcCur={()=>{
                            setCurrentWindow(element.quizId)
                        }}></QuizLine>)
                })}
            </QuizContainer>
        </>

    )
}
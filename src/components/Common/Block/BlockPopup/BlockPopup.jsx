import styled from 'styled-components'
import QuizLine from '../../../Common/QuizLine/QuizLine'
import Notification from '../../../Common/Notification/Notification'
import { useContext, useState } from 'react'
import { QuizContext } from '../../../../context/QuizContext'
const QuizContainer = styled.div`
    width: 100%;
    gap: 35px;
    overflow-y: auto;
    max-height: 600px;
    position: relative;
`

export default function BlockPopup(props) {
    const [currentWindow,setCurrentWindow] = useState(0)
    const {data} = useContext(QuizContext)

    const Noti = () => {
        if(props.noti){
            return (<Notification pad='5px' top='25px' left='200px' content={data.length} />)
        }
        else {
            return (null)
        }
    }

    return (
        <> 
            {Noti()}
            <QuizContainer>
                {data && data.map((element, ind) => {
                    return (<QuizLine key={ind}
                        data={element}
                        cur={currentWindow} 
                        funcCur={()=>{
                            setCurrentWindow(element.id)
                        }}></QuizLine>)
                })}
            </QuizContainer>
        </>

    )
}
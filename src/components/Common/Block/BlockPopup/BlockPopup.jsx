import styled from 'styled-components'
import QuizLine from '../../../Common/QuizLine/QuizLine'
import Notification from '../../../Common/Notification/Notification'
const QuizContainer = styled.div`
    width: 100%;
    gap: 35px;
    overflow-y: auto;
    max-height: 200px;
    position: relative;
`

export default function BlockPopup(props) {
    return (
        <> 
        <Notification pad='5px' top='25px' left='200px' content={props.data.length} />
            <QuizContainer>
                {props.data && props.data.map((element, ind) => {
                    return (<QuizLine key={ind} quiz_name={element.quiz_name} date={element.date} time={element.time} attempt={element.attempt} point={element.point}></QuizLine>)
                })}
            </QuizContainer>
        </>

    )
}
import FillInBlankQuiz from '../../../FillInBlankQuiz/FillInBlankQuiz'


export default function WriteQuiz(props)
{
    return(
        <>
            <FillInBlankQuiz func={props.func} data={props.data}/>
        </>
    )
}
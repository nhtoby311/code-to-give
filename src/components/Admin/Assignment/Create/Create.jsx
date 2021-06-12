import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Input from '../../../Common/Input/Input'
import Button from '../../../Common/Button/Button'
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 55px;
`

export default function Create(){
    const {register , handleSubmit} = useForm()

    const QuizTypes = ['PicQuizz','Quiz','Scribbly']

    const onSubmitCB = async (data)=>{
        console.log(data)
        const formData = new FormData()     
        formData.append("bigQuestionImage",data.bigQuestionImage[0])
        formData.append("quizId",data.quizId)
        formData.append("bigQuestion",data.bigQuestion)
        formData.append("bigAnswer",data.bigAnswer)
        formData.append("quizName",data.quizName)

        console.log(formData)

        /*const response = await fetch ('https://code-to-give.herokuapp.com/api/pic-quiz/create',{
            method:"POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body:formData
        })
        const result = await response.json()
        console.log(result)*/

        // async function f() {                     trycatch async await example

        //     try {
        //       let response = await fetch('/no-user-here');
        //       let user = await response.json();
        //     } catch(err) {
        //       // catches errors both in fetch and response.json
        //       alert(err);
        //     }
        //   }
    }

    return(
        <Container>
            <h3>Assignment - Create Assignment</h3>
            <Form onSubmit={handleSubmit((data)=>onSubmitCB(data))}>
                <Input label="quizName" type="text" register={register('quizName')}></Input>
                <Input label="quizId" type="text" register={register('quizId')}></Input>
                <Input label="quizType" type="select" options={QuizTypes} register={register('quizType')}></Input>
                <Input label="bigQuestion" type="text" register={register('bigQuestion')}></Input>
                <Input label="bigAnswer" type="text" register={register('bigAnswer')}></Input>
                <Input label="bigQuestionImage" type="file" register={register('bigQuestionImage')}></Input>
                <Button content="NEXT" pad="35px"/>
            </Form>
        </Container>
    )
}
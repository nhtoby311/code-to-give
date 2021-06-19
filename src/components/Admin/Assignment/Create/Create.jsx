import { useForm, useWatch } from 'react-hook-form'
import styled from 'styled-components'
import Input from '../../../Common/Input/Input'
import Button from '../../../Common/Button/Button'
import { useState } from 'react'
import Add from './Add/Add'
import Cross from '../../../Common/Cross/Cross'
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

const FormLayout = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 55px;
    border-radius: 35px;
    border: #afbb05 3px solid;
    padding: 45px 25px;
`

const FormTitle = styled.h3`
    position: absolute;
    top: -25px;
    left: 35px;
    padding: 8px 10px;
    background-color: white;
    font-size: 24px;
    color: #afbb05;
    border-radius: 25px;
`

const InputCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

const CrossDiv = styled.div`
    display: flex;
    align-items: center;
    background: red;
    height: fit-content;
    padding: 14px;
    border-radius: 50%;
    margin-left: 20px;
`

export default function Create(){
    const [taskScribblyCount,setTaskScribblyCount] = useState(1)
    const {register , handleSubmit , control} = useForm()
    
    const watch = useWatch({
        control,
        name: 'quizType',
    })

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

        /*const response = await fetch (`${process.env.REACT_APP_DOMAIN}/api/pic-quiz/create`,{
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

    const PicQuizzForm = 
    (<FormLayout>
        <FormTitle>PicQuizz</FormTitle>
        <Input label="bigQuestion" type="text" register={register('bigQuestion')}></Input>
        <Input label="bigAnswer" type="text" register={register('bigAnswer')}></Input>
        <Input label="bigQuestionImage" type="file" register={register('bigQuestionImage')}></Input>
    </FormLayout>)

    const ScribblyForm = 
    (<FormLayout>
        <FormTitle>Scribbly</FormTitle>
        <Input label="scribblyType" type="select" options={['group','individual']} register={register('scribblyType')}></Input>
        {[...Array(taskScribblyCount)].map((x, i) =>
        <InputCont>
            <Input key={i} label="taskDescription" type="text" register={register('taskDescription')}></Input>
            <CrossDiv onClick={()=>{setTaskScribblyCount(taskScribblyCount-1)}}>
                <Cross/>
            </CrossDiv>
        </InputCont>
        )}
        <Add func={()=>{setTaskScribblyCount(taskScribblyCount+1)}}/>
    </FormLayout>)

    const QuizForm = 
    (<FormLayout>
        <FormTitle>Quiz</FormTitle>
        <Input label="bigQuestion" type="text" register={register('bigQuestion')}></Input>
        <Input label="bigAnswer" type="text" register={register('bigAnswer')}></Input>
        <Input label="bigQuestionImage" type="file" register={register('bigQuestionImage')}></Input>
    </FormLayout>)


    return(
        <Container>
            <h3>Assignment - Create Assignment</h3>
            <Form onSubmit={handleSubmit((data)=>onSubmitCB(data))}>
                <Input label="quizName" type="text" register={register('quizName')}></Input>
                <Input label="quizId" type="text" register={register('quizId')}></Input>
                <Input label="quizType" type="select" options={QuizTypes} register={register('quizType')}></Input>
                
                {watch === 'PicQuizz' ? (PicQuizzForm) : 
                watch === 'Scribbly' ? (ScribblyForm) : 
                watch === 'Quiz' ? (QuizForm) : (null)}

                <Input label="dueDate" type="text" register={register('dueDate')}></Input>
                <Input label="maxTime" type="text" register={register('maxTime')}></Input>
                <Input label="numberOfAttempt" type="text" register={register('numberOfAttempt')}></Input>
                <Input label="maxPoint" type="text" register={register('maxTime')}></Input>
                <Input label="class" type="text" register={register('class')}></Input>
                <Input label="author" type="text" register={register('author')}></Input>

                <Button content="SUBMIT" pad="35px"/>

            </Form>
        </Container>
    )
}
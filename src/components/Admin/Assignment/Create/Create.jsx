import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import styled from 'styled-components'
import Input from '../../../Common/Input/Input'
import Button from '../../../Common/Button/Button'
import { useState } from 'react'
import Add from './Add/Add'
import Cross from '../../../Common/Cross/Cross'
import Loading from '../../../Common/Loading/Loading'
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

const LoadingDiv = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(92, 91, 91, 0.2);
    z-index: 2;
`

export default function Create(){
    const [loading, setLoading] = useState(false)
    const {register , handleSubmit , control} = useForm()
    const {fields, append, remove} = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "taskDescription", // unique name for your Field Array
    })
    
    const watch = useWatch({
        control,
        name: 'quizType',
    })

    const QuizTypes = [
        {
            label:'Select...',
            value:''
        },{
            label:'Scribbly',
            value:'Scribbly'
        },{
            label:'Quiz',
            value:'Quiz'
        },{
            label:'PicQuizz',
            value:'PicQuizz'
        }
    ]

    const ScribblyTypes = [
        {
            label:'Select...',
            value:''
        },{
            label:'Group',
            value:'group'
        },{
            label:'Individual',
            value:'individual'
        },
    ]

    const postHandle = async (formData,url) =>{
        try{
            const response = await fetch (url,{
                method:"POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body:formData
            })
            const result = await response.json()
            console.log(result)
        } catch(err){
            console.error(err)
        }
    }

    const FormDataHandle = async (data) => {
        const formData = new FormData()  
        formData.append("quizId",data.quizId)
        formData.append("quizName",data.quizName)
        formData.append("dueDate",new Date(data.dueDate))
        formData.append("maxTime",parseInt(data.maxTime))
        formData.append("maxPoint",parseInt(data.maxPoint))
        formData.append("numberOfAttempt",data.numberOfAttempt)
        formData.append("class",data.class)
        formData.append("author",data.author)
        formData.append("quizType",data.quizType)
        formData.append("createdDate",new Date())
        switch (watch){
            case 'Scribbly':{
                data.taskDescription.map((ele)=>                   //taskDescription is an array, so need to append each elements into formdata to send to backend
                    formData.append("taskDescription",ele.value)                    //.value because form hook field array return object with value:
                )
                formData.append("scribblyType",data.scribblyType)
                for (var value of formData.values()) {
                    console.log(value);
                }
                await postHandle(formData,`${process.env.REACT_APP_DOMAIN}/api/scribbly/create`)
                break;
            }
            case 'PicQuizz':{
                formData.append("bigQuestionImage",data.bigQuestionImage[0])
                formData.append("bigQuestion",data.bigQuestion)
                formData.append("bigAnswer",data.bigAnswer)
                await postHandle(formData,`${process.env.REACT_APP_DOMAIN}/api/pic-quiz/create`)
                break;
            }
            case 'Quiz':{
                
                await postHandle(formData,`${process.env.REACT_APP_DOMAIN}/api/pic-quiz/create`)
                break;
            }
            default:{
                break;
            }
        }
    }

    

    const onSubmitCB = async (data)=>{
        console.log(data)
        setLoading(true)
        await FormDataHandle(data)
        setLoading(false)
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

        <Input label="scribblyType" type="select" options={ScribblyTypes} register={register('scribblyType')}></Input>

        {fields.map((field,ind)=>{
            return <InputCont key={field.id} >
                <Input label={`taskDescription ${ind}`} type="text" register={register(`taskDescription.${ind}.value`)}></Input>
                <CrossDiv onClick={()=>remove(ind)}>
                    <Cross/>
                </CrossDiv>
            </InputCont>
        })}
        <Add label="Add Task Description" func={()=>append({})}/>
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
            {loading ? (<LoadingDiv>
                <Loading/>
            </LoadingDiv>) : (null)}

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
                <Input label="maxPoint" type="text" register={register('maxPoint')}></Input>
                <Input label="class" type="text" register={register('class')}></Input>
                <Input label="author" type="text" register={register('author')}></Input>

                <Button content="CREATE" pad="35px"/>

            </Form>
        </Container>
    )
}
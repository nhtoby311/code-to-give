import React, { useEffect, useState } from "react"

export const QuizContext = React.createContext();

export function QuizProvider({children})
{
    const [dataToDo,setDataToDo] = useState([])
    const [dataFinished,setDataFinished] = useState([])
    const [loadingToDo,setLoadingToDo] = useState(true)
    const [loadingFinished,setLoadingFinished] = useState(true)

    const getDataToDo = async (url) => {
        if(url)
        {
            const responseTodo = await fetch(url,{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const resultTodo = await responseTodo.json()
            //console.log(resultTodo)
            setLoadingToDo(false)
            //console.log(resultTodo.quizzes)             //set temp for picquizz
            
            setDataToDo(resultTodo.quizzes)
        }
    }

    const getDataFinished = async(url)=>{
        if(url)
        {
            const responseFinished = await fetch(url,{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const resultFinished = await responseFinished.json()
            setDataFinished(resultFinished.quizzes)
            console.log(resultFinished.quizzes)
            setLoadingFinished(false)
        }
    }

    const resetLoading = ()=>{
        setLoadingToDo(true)
        setLoadingFinished(true)
    }

    const handleGameFetching = (gameType)=>{
        switch (gameType)
        {
            case 'Scribbly':
                {
                    getDataFinished('https://code-to-give.herokuapp.com/api/scribbly/finished')
                    getDataToDo('https://code-to-give.herokuapp.com/api/scribbly/need-to-do')
                    break;
                }/*
            case 'Quiz':
                {
                    return getData('../mock_data/Quiz.json')
                }*/
            case 'PicQuizz':
                {
                    getDataFinished('https://code-to-give.herokuapp.com/api/pic-quiz/get-list/finished')
                    getDataToDo('https://code-to-give.herokuapp.com/api/pic-quiz/get-list/need-to-do')
                    break;
                }
            default:
                {
                    getDataFinished()
                    getDataToDo()
                    break;
                } 
        }
    }

    /*useEffect(()=>{
        console.log(data)
    },[data])*/

    return(
        <QuizContext.Provider value={{dataToDo,dataFinished,handleGameFetching,loadingToDo,loadingFinished,resetLoading}}>
            {children}
        </QuizContext.Provider>
    )
}
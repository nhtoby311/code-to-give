import React, { useState } from "react"

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
            
            setLoadingToDo(false)
            console.log(resultTodo.quizzes)             //set temp for picquizz
            
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
            setLoadingFinished(false)
        }
    }

    const handleGameFetching = (gameType)=>{
        switch (gameType)
        {
            /*case 'Scribbly':
                {
                    return getData('../mock_data/Scribbly.json')
                }
            case 'Quiz':
                {
                    return getData('../mock_data/Quiz.json')
                }*/
            case 'PicQuizz':
                {
                    getDataFinished('https://code-to-give.herokuapp.com/api/pic-quiz/get-list/finished')
                    getDataToDo('https://code-to-give.herokuapp.com/api/pic-quiz/get-list/need-to-do')
                }
            default:
                {
                    getDataFinished()
                    getDataToDo()
                } 
        }
    }

    /*useEffect(()=>{
        console.log(data)
    },[data])*/

    return(
        <QuizContext.Provider value={{dataToDo,dataFinished,handleGameFetching,loadingToDo,loadingFinished}}>
            {children}
        </QuizContext.Provider>
    )
}
import React, { useState } from "react"

export const QuizContext = React.createContext();

export function QuizProvider({children})
{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = async (url) => {
        if(url)
        {
            const response = await fetch(url,{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const result = await response.json()
            setLoading(false)
            console.log(result.quizzes)             //set temp for picquizz
            setData(result.quizzes)
            console.log(result)
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
                    return getData('https://code-to-give.herokuapp.com/api/pic-quiz/get-list/need-to-do')
                }
            default:
                {
                    return getData()
                } 
        }
    }

    /*useEffect(()=>{
        console.log(data)
    },[data])*/

    return(
        <QuizContext.Provider value={{data,handleGameFetching,loading}}>
            {children}
        </QuizContext.Provider>
    )
}
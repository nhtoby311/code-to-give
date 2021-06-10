import React, { useState } from "react"

export const QuizContext = React.createContext();

export function QuizProvider({children})
{
    const [data,setData] = useState([])

    const getData = async (url) => {
        if(url)
        {
            const response = await fetch(url)
            const result = await response.json()
            console.log(result.quizzes)             //set temp for picquizz
            setData(result.quizzes)
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
                    return getData('https://code-to-give.herokuapp.com/api/pic-quiz/need-to-do')
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
        <QuizContext.Provider value={{data,handleGameFetching}}>
            {children}
        </QuizContext.Provider>
    )
}
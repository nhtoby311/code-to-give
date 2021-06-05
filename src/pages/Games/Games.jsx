import GameBlock from './GameBlock/GameBlock'
import './Games.scss'

export default function Games()
{
    return (
        <div className="container games-cont">
            <GameBlock title='Scribbly'/>
            <GameBlock title='Quiz'/>
            <GameBlock title='Pic-Quizz'/>
            <GameBlock title='List'/>
        </div>
    )
}
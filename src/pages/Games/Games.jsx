import GameBlock from './GameBlock/GameBlock'
import './Games.scss'

export default function Games()
{
    return (
        <div className="container games-cont">
            <GameBlock title='scribbly'/>
            <GameBlock title='Quiz'/>
            <GameBlock title='scrabble'/>
            <GameBlock title='list'/>
        </div>
    )
}
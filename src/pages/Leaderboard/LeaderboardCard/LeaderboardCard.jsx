import './LeaderboardCard.scss'
import LeaderboardItem from './LeaderboardItem/LeaderboardItem'

export default function LeaderboardCard(props)
{
    return(
        <div className="leaderboardcard">
            <h2>title</h2>
            <div className="leaderboardcard-scroll">
                <LeaderboardItem/>
                <LeaderboardItem/>
                <LeaderboardItem/>
                <LeaderboardItem/>
                <LeaderboardItem/>
                <LeaderboardItem/>
                <LeaderboardItem/>
            </div>
        </div>
    )
}
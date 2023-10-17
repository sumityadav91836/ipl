import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails, matchCards} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <>
      <div className="latest-match-card">
        <div className="latest-card-details">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="other-details">{venue}</p>
          <p className="other-details">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="competing-team-logo"
        />
        <div className="latest-card-details">
          <p className="other-details align-item">First Innings</p>
          <p className="other-detail">{firstInnings}</p>
          <p className="other-details align-item">Second Innings</p>
          <p className="other-detail">{secondInnings}</p>
          <p className="other-details align-item">Man of The Match</p>
          <p className="other-detail">{manOfTheMatch}</p>
          <p className="other-details align-item">Umpires</p>
          <p className="other-detail">{umpires}</p>
        </div>
      </div>
      <ul className="match-cards">
        {matchCards.map(eachMatchCard => (
          <MatchCard key={eachMatchCard.id} matchDetails={eachMatchCard} />
        ))}
      </ul>
    </>
  )
}

export default LatestMatch

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, matchStatus, result, competingTeamLogo} = matchDetails

  const matchStatusClassName =
    matchStatus === 'Won' ? 'won-status' : 'loss-status'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

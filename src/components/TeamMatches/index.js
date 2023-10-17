import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: [],
    latestMatchDetails: {},
    matchCards: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchsDetails()
  }

  getMatchsDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
    }
    console.log(updatedData)

    const updatedLatestMatchData = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const updatedMatchCards = updatedData.recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    console.log(updatedMatchCards)

    this.setState({
      matchDetails: updatedData,
      latestMatchDetails: updatedLatestMatchData,
      matchCards: updatedMatchCards,
      isLoading: false,
    })
  }

  renderMatchPage = () => {
    const {matchDetails, latestMatchDetails, matchCards} = this.state
    const {teamBannerUrl} = matchDetails

    return (
      <>
        <img src={teamBannerUrl} className="banner-img" alt="team banner" />
        <p className="latest-match-text">Latest Match</p>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          matchCards={matchCards}
        />
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-color">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderMatchPage()
        )}
      </div>
    )
  }
}

export default TeamMatches

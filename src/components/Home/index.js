import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsCardData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsCardData: updatedData, isLoading: false})
  }

  renderHomeRoute = () => {
    const {teamsCardData} = this.state

    return (
      <>
        <div className="logo-and-titile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="title-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-cards">
          {teamsCardData.map(eachTeamData => (
            <TeamCard key={eachTeamData.id} teamCardDetails={eachTeamData} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderHomeRoute()
        )}
      </div>
    )
  }
}

export default Home

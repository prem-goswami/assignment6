import {Component} from 'react'
import './index.css'
import LogoCard from '../LogoCard'
import Rules from '../Rules'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameCard extends Component {
  state = {activeId: '', optionSelected: false, score: 0}

  setActiveOptionId = id => {
    this.setState({activeId: id, optionSelected: true})
  }

  renderHeaderContainer = () => {
    const {score} = this.state
    return (
      <div className="headerContainer">
        <div className="textHeader">
          <h1>ROCK PAPER SCISSORS</h1>
        </div>
        <div className="scoreCard">
          <p className="scoreText">Score</p>
          <p className="scoreText">{score}</p>
        </div>
      </div>
    )
  }

  renderGameContainer = () => (
    <div className="gameContainer">
      {choicesList.map(eachItem => (
        <LogoCard
          choiceDetails={eachItem}
          key={eachItem.id}
          setActiveOptionId={this.setActiveOptionId}
        />
      ))}
    </div>
  )

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  incrementScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  clickedPlayAgain = () => {
    this.setState({optionSelected: false})
  }

  renderResultContainer = () => {
    const {activeId} = this.state
    const selectedOption = choicesList.filter(
      eachItem => eachItem.id === activeId,
    )
    const randomNumber = Math.floor(Math.random() * 3)
    const randomOption = choicesList[randomNumber]
    let displayText
    if (selectedOption[0].id === randomOption.id) {
      displayText = 'it Is Draw'
    } else if (selectedOption[0].id === 'ROCK' && randomOption.id === 'PAPER') {
      displayText = 'You Lose'
    } else if (
      selectedOption[0].id === 'PAPER' &&
      randomOption.id === 'SCISSORS'
    ) {
      displayText = 'You Lose'
    } else if (
      selectedOption[0].id === 'SCISSORS' &&
      randomOption.id === 'ROCK'
    ) {
      displayText = 'You Lose'
    } else {
      displayText = 'YOU WON'
    }
    return (
      <div className="resultContainer">
        <div className="optionsContainer">
          <div className="youContainer">
            <p>You</p>
            <img
              src={selectedOption[0].imageUrl}
              alt="your choice"
              className="imageSizingOptions"
            />
          </div>
          <div className="youContainer">
            <p>Opponent</p>
            <img
              src={randomOption.imageUrl}
              alt="opponent choice"
              className="imageSizingOptions"
            />
          </div>
        </div>
        <p>{displayText}</p>
        <button
          type="button"
          className="playAgainButton"
          onClick={this.clickedPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {activeId, optionSelected} = this.state

    return (
      <div className="bgContainer">
        {this.renderHeaderContainer()}
        <div className="gameContainer">
          {optionSelected
            ? this.renderResultContainer()
            : this.renderGameContainer()}
        </div>
        <div className="RulesContainer">
          <Rules />
        </div>
      </div>
    )
  }
}

export default GameCard

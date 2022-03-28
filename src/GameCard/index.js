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
  state = {
    activeId: '',
    optionSelected: false,
    score: 0,
    displayText: '',
    randomOption: '',
    selectedOption: '',
  }

  setActiveOptionId = id => {
    const yourOption = choicesList.filter(eachItem => eachItem.id === id)
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentOption = choicesList[randomNumber]
    let resultText
    if (yourOption[0].id === opponentOption.id) {
      resultText = 'it Is Draw'
    } else if (yourOption[0].id === 'ROCK' && opponentOption.id === 'PAPER') {
      resultText = 'You Lose'
      this.decrementScore()
    } else if (
      yourOption[0].id === 'PAPER' &&
      opponentOption.id === 'SCISSORS'
    ) {
      resultText = 'You Lose'
      this.decrementScore()
    } else if (
      yourOption[0].id === 'SCISSORS' &&
      opponentOption.id === 'ROCK'
    ) {
      resultText = 'You Lose'
      this.decrementScore()
    } else {
      resultText = 'YOU WON'
      this.incrementScore()
    }

    this.setState({
      activeId: id,
      optionSelected: true,
      displayText: resultText,
      randomOption: opponentOption,
      selectedOption: yourOption,
    })
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

  drawScore = () => {
    this.setState(prevState => ({score: prevState.score}))
  }

  clickedPlayAgain = () => {
    this.setState({optionSelected: false})
  }

  renderResultContainer = () => {
    const {activeId, displayText, randomOption, selectedOption} = this.state
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
    const {optionSelected} = this.state

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

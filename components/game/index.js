import {Component} from 'react'
import Rules from '../Rules'
import GameItem from '../gameItems'
import {
  RPSContainer,
  ScoreAndHeadingContainer,
  MainHeadingElement,
  ScoreContainer,
  Score,
  GameResultViewContainer,
  GameResultImgsCont,
  ChoiceCont,
  ImgText,
  ResultImg,
  ResultText,
  PlayAgainButton,
} from './styledComponets'

const oppoentTuenList = ['ROCK', 'PAPER', 'SCISSORS']
const opponentImgUrlList = [
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
]
const gameStatus = {
  playingGame: 'PLAYING',
  result: 'RESULT',
}

class Game extends Component {
  state = {
    activeId: '',
    activeUserImg: '',
    activeOponentId: '',
    activeOponentImg: '',
    resultText: '',
    score: 0,
    gameMode: gameStatus.playingGame,
  }

  settingActiveSelections = (currentId, filterdImage) => {
    const {
      activeId,
      activeOponentId,
      activeUserImg,
      activeOponentImg,
      score,
      resultText,
      gameMode,
    } = this.state

    this.setState({
      gameMode: gameStatus.result,
    })

    const {choicesList} = this.props

    this.setState({
      activeId: currentId,
    })
    this.setState({
      activeUserImg: filterdImage,
    })

    const activeOponentTurnid = Math.floor(Math.random() * 3)

    this.setState(
      {
        activeOponentId: choicesList[activeOponentTurnid].id,
      },
      this.resultMatchrendeing(),
    )

    this.setState({
      activeOponentImg: choicesList[activeOponentTurnid].imageUrl,
    })
    console.log(activeId)
  }

  resultMatchrendeing = () => {
    const {score, activeId, activeOponentId, resultText} = this.state

    if (activeId === 'ROCK' && activeOponentId === 'SCISSORS') {
      this.setState(prvState => ({
        score: prvState.score + 1,
      }))
      this.setState({
        resultText: 'YOU WON',
      })
    } else if (activeId === 'ROCK' && activeOponentId === 'PAPER') {
      this.setState(prvState => ({
        score: prvState.score - 1,
      }))
      this.setState({
        resultText: 'YOU LOSE',
      })
    } else if (activeId === 'SCISSORS' && activeOponentId === 'PAPER') {
      this.setState(prvState => ({
        score: prvState.score + 1,
      }))
      this.setState({
        resultText: 'YOU WON',
      })
    } else if (activeId === 'SCISSORS' && activeOponentId === 'ROCK') {
      this.setState(prvState => ({
        score: prvState.score - 1,
      }))
      this.setState({
        resultText: 'YOU LOSE',
      })
    } else if (activeId === 'PAPER' && activeOponentId === 'ROCK') {
      this.setState(prvState => ({
        score: prvState.score + 1,
      }))
      this.setState({
        resultText: 'YOU WON',
      })
    } else if (activeId === 'PAPER' && activeOponentId === 'SCISSORS') {
      this.setState(prvState => ({
        score: prvState.score - 1,
      }))
      this.setState({
        resultText: 'YOU LOSE',
      })
    } else {
      this.setState({
        resultText: 'IT IS DRAW',
      })
    }
    this.GameResultView()
  }

  Playbutton = () => {
    const {gameMode} = this.state
    this.setState({
      gameMode: gameStatus.playingGame,
    })
  }

  GameResultView = () => {
    const {activeOponentImg, activeUserImg, resultText} = this.state
    return (
      <GameResultViewContainer>
        <GameResultImgsCont>
          <ChoiceCont>
            <ImgText>YOU</ImgText>
            <ResultImg src={activeUserImg} alt="your choice" />
          </ChoiceCont>
          <ChoiceCont>
            <ImgText>OPPONENT</ImgText>
            <ResultImg src={activeOponentImg} alt="opponent choice" />
          </ChoiceCont>
        </GameResultImgsCont>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButton type="button" onClick={this.Playbutton}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderPlayng = () => {
    const {choicesList} = this.props
    return (
      <GameItem
        choicesList={choicesList}
        settingActiveSelections={this.settingActiveSelections}
      />
    )
  }

  renderTheGameContainer = () => {
    const {gameMode} = this.state
    switch (gameMode) {
      case gameStatus.playingGame:
        return this.renderPlayng()
      case gameStatus.result:
        return this.GameResultView()
      default:
        return null
    }
  }

  render() {
    const {choicesList} = this.props
    const {score} = this.state
    const {activeId, activeOponentId, resultText} = this.state

    console.log(resultText)
    return (
      <RPSContainer>
        <ScoreAndHeadingContainer>
          <MainHeadingElement>
            Rock <br /> Paper <br /> Scissors
          </MainHeadingElement>
          <ScoreContainer>
            <Score>Score</Score>
            <Score bold>{score}</Score>
          </ScoreContainer>
        </ScoreAndHeadingContainer>
        {this.renderTheGameContainer()}
        <Rules className="rulescontainer" />
      </RPSContainer>
    )
  }
}

export default Game

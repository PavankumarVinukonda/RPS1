import './index.css'

const GameItem = props => {
  const {choicesList, settingActiveSelections} = props
  const setChoice = e => {
    const currentId = e.currentTarget.id
    const filterdList = choicesList.filter(item => item.id === currentId)
    const filterdImage = filterdList[0].imageUrl
    settingActiveSelections(currentId, filterdImage)
  }

  return (
    <div className="play">
      <li className="listItem">
        <button
          id={choicesList[0].id}
          type="button"
          data-testid="rockButton"
          onClick={setChoice}
          className="buttonElement"
        >
          <img
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            className="icon"
          />
        </button>
      </li>
      <li className="listItem">
        <button
          id={choicesList[1].id}
          type="button"
          data-testid="paperButton"
          onClick={setChoice}
          className="buttonElement"
        >
          <img
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            className="icon"
          />
        </button>
      </li>
      <li className="listItem">
        <button
          id={choicesList[2].id}
          type="button"
          data-testid="scissorsButton"
          onClick={setChoice}
          className="buttonElement"
        >
          <img
            src={choicesList[2].imageUrl}
            alt={choicesList[2].id}
            className="icon"
          />
        </button>
      </li>
    </div>
  )
}

export default GameItem

import './index.css'

const LogoCard = props => {
  const {choiceDetails, setActiveOptionId} = props
  const {imageUrl, id} = choiceDetails
  const onClickOption = () => {
    setActiveOptionId(id)
  }
  let altText
  if (id === 'ROCK') {
    altText = 'rockButton'
  } else if (id === 'PAPER') {
    altText = 'paperButton'
  } else {
    altText = 'scissorsButton'
  }
  return (
    <li className="choiceItem">
      <button
        type="button"
        className="butt"
        data-testid={altText}
        onClick={onClickOption}
      >
        <img src={imageUrl} alt={id} className="imageSizing" />
      </button>
    </li>
  )
}

export default LogoCard

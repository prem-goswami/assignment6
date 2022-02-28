import Popup from 'reactjs-popup'
import './index.css'

const Rules = () => (
  <div className="popContainer">
    <Popup
      modal
      trigger={
        <button type="button" className="rulesText">
          Rules
        </button>
      }
    >
      {close => (
        <div className="rulesContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
            alt="rules"
            className="rulesImage"
          />
          <button type="button" onClick={() => close()}>
            close
          </button>
        </div>
      )}
    </Popup>
  </div>
)

export default Rules

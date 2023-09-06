// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isJoe: false, isJonas: false}

  renderJoe = () => {
    this.setState(prevState => ({isJoe: !prevState.isJoe}))
  }

  renderJonas = () => {
    this.setState(prevState => ({isJonas: !prevState.isJonas}))
  }

  render() {
    const {isJoe, isJonas} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="card-container">
          <div>
            <button className="firstBtn" onClick={this.renderJoe} type="button">
              Show/Hide Firstname
            </button>
            {isJoe && <p className="joe">Joe</p>}
          </div>
          <div>
            <button
              className="secondBtn"
              onClick={this.renderJonas}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {isJonas && <p className="jonas">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

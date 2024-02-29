// Write your code here

import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onHideShowFirstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  onHideShowLastName = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="name-btn-container">
          <div className="contain">
            <button type="button" onClick={this.onHideShowFirstName}>
              Show/Hide firstName
            </button>
            {firstName && (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div>
            <button type="button" onClick={this.onHideShowLastName}>
              Show/Hide LastName
            </button>
            {lastName && (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  generateNumbers = () => {
    const randomNumber = this.randomNumber()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1>Random numbers</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button2"
            onClick={this.generateNumbers}
          >
            {' '}
            generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

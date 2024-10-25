// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}

  ChangeSearchInput = event => {
    const {value} = event.target
    this.setState({
      searchInput: value,
      count: value.length,
    })
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="head">Calculate the Letters you enter</h1>
          <label className="para"  htmlFor="search">Enter the phrase</label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.ChangeSearchInput}
            value={searchInput}
            className="input"
            id="search"
          />
          <br />
          <p className="button">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="mainCon">
        <div className="subCon">
          <h1 className="mainH">Destination Search</h1>
          <div className="searchCon">
            <input
              type="search"
              className="inputBox"
              placeholder="Search"
              onChange={this.onSearchInput}
              value={searchInput}
            />
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="listCon">
            {searchResults.map(eachItem => (
              <DestinationItem itemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

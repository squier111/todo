import React , {Component} from 'react'
import './search-panel.css'
import ItemStatusFilter from '../item-status-filter'

export default class SearchPannel extends Component {
  constructor() {
    super();
    this.state ={
      term:'',
    }
  };


  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({
      term: e.target.value
    })
    this.props.onSearchChang(e.target.value);
  }


  render () {
    return (
      <div className="search-panel">
        <input 
          placeholder='Type here to search'
          onChange={this.onSearchChange}
          className="search-input form-control"
          htmlFor=""
          value={this.state.term}
          />
        <ItemStatusFilter 
          filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}
        />
      </div>
    )
  }
}

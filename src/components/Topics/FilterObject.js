import React, { Component } from 'react'

class FilterObjects extends Component {

    constructor() {
        super()
        this.state = {
            unfilteredArray: [{ color: 'black', occupation: 'santa' }, { color: 'red', occupation: 'santa' }, { color: 'white', occupation: 'james' }],

            userInput: '',

            filteredArray: []


        }

    }
    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterArray(prop) {
        let unfiltered = this.state.unfilteredArray
        let filtered = []
        for (let i = 0; i < unfiltered.length; i++) {
            if (unfiltered[i].hasOwnProperty(prop)) {
                filtered.push(unfiltered[i])
            }
        }
        this.setState({
            filteredArray: filtered
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => { this.filterArray(this.state.userInput) }}></button>
        <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
export default FilterObjects
import React, {Component} from 'react'

class FilterString extends Component{

    constructor(){
        super()
        this.state = {
            
            unFilteredArray: ['Hi', 'Learning', 'Code'],
            userInput: '',
            filteredArray: []
        }
    }


    handleChange(val){
        this.setState({userInput: val})
    }

    filter(userInput){
        let unfiltered = this.state.unFilteredArray
        let filtered = []
        for(let i = 0; i < unfiltered.length; i++){
            if(unfiltered[i].includes(userInput)){
                filtered.push(unfiltered[i])
            }
        }
        this.setState({filteredArray: filtered})
    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
        <span className='puzzleTest'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange = {(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick = {() =>this.filter(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString
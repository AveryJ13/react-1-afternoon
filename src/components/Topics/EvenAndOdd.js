import React, {Component} from 'react'


class EvenAndOdd extends Component{

    constructor(){
        super()

        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',')
        let evenNums = []
        let oddNums = []
        for(let i=0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evenNums.push(arr[i])
            }else oddNums.push(arr[i])
        }
        this.setState({evenArray: evenNums, oddArray: oddNums})
    }

    render(){
        return(
            <div className = 'puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className = 'inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className = 'confirmationButton' onClick ={ () => {this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className = 'resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className = 'resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>

            </div>
            
        )
    }



}


export default EvenAndOdd
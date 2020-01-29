import React, {Component} from 'react'

class Sum extends Component{

    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    inputHandler(value){
        this.setState({number1: parseInt(value)})
    }

    inputHandler2(value){
        this.setState({number2: parseInt(value)})
    }

    findSum(number1, number2){
        let num1 = number1
        let num2 = number2
        let s = num1 + num2
        this.setState({sum: s})
    }

    render(){
        return(
            <div className = 'puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className = 'inputLine' onChange = { (e) => this.inputHandler(e.target.value)}></input>
                <input className = 'inputLine'onChange = {(e) => this.inputHandler2(e.target.value)}></input>
                <button className = 'confirmationButton' onClick = {() => this.findSum(this.state.number1, this.state.number2)}>Find Sum</button>
                <span className = 'resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum
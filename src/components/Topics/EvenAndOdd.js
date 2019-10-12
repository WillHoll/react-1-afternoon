import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    inputHandler(value) {
        this.setState({
            userInput: value.split(',')
        })
    }
    
    arraySplitter(value) {
        let odd = [];
        let even = [];
        this.state.userInput.forEach(element => {element % 2 === 0
            ? even.push(element)
            : odd.push(element)
        });
        this.setState({evenArray: even, oddArray: odd})
    }
    
    render() {
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={event => this.inputHandler(event.target.value)}/>
                <button className='confirmationButton' onClick={() => this.arraySplitter(this.state.userInput)}>Split</button>
                <span className='resultBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;
import React, { Component } from 'react';

class FilterObject extends Component{
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                name: 'Marty',
                hobby: "McFlyin'",
                },
                {
                name: 'Dwight',
                title: 'Assistant TO THE Regional Manager',
                uniform: 'yellow-ish shirt'
                },
                {
                name: 'Josh',
                age: 56,
                hobby: 'Making Pancakes',
                uniform: 'pants please' 
                }],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput(value) {
        this.setState({userInput: value})
    }

    filterArray(value) {
        let employees = this.state.unFilteredArray;
        let newArray = [];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(value)){
                newArray.push(employees[i])
            }
        }
        return this.setState({filteredArray: newArray})
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className='inputLine' onChange={(event) => this.updateUserInput(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;
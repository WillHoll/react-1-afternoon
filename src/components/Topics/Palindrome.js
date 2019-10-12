import React, { Component } from 'react';

class Palindrome extends Component{
    constructor() {
        super();

    }
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names:</span>
                <input className="inputLine"></input>
                <button className="confirmationButton" > Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: </span>
            </div>
        )
    }
}


export default Palindrome;
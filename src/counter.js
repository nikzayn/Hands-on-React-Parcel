import React, { Component } from 'react';

class counter extends Component {
    state = {
        initial: 0
    }

    handleInc = () => {
        this.setState({
            initial : initial + 1 
        })
    }

    handleDec = () => {
        this.setState({
            initial : initial - 1 
        })
    }

    render() {
        return (
            <div>
                <h1>Counter value : {this.state.initial}</h1> 
                <button onclick={this.handleInc}>Inc</button> 
                <button onclick={this.handleDec}>Dec</button>          
            </div>
        );
    }
}

export default counter;
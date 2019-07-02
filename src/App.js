import React, { Component } from 'react';

import Timer from './timer.js';
import Button from './button.js';

import './App.css';

// TODO: completely refactor app NOT using Date() objects -- instead
// need to simply use a counter in conjunction with timeouts

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isRunning: false,
            timerID: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    // update time via state update by incrementing time value by 1
    tick() {
        this.setState(
            (state) => {
                return { time: state.time + 1 }
            }
        );
    }

    // click handler for start/stop button
    handleClick() {
        // check to see if timer not running
        if (!this.state.isRunning) {
            // start timer, updating once/sec 
            const id = setInterval(
                () => this.tick()
                , 1000);
            // update timer state
            this.setState({
                isRunning: !this.state.isRunning,
                timerID: id
            });
        } else {
            // it's running, so stop timer
            clearInterval(this.state.timerID);
            // then update state to reflect that it's no longer running
            this.setState({
                isRunning: !this.state.isRunning,
                timerID: null
            })
        }
    }

    // click handler for reset button
    handleRestart() {
        // check to see if timer not running
        if (!this.state.isRunning) {
            // then simply reset time state
            this.setState({
                time: 0
            });
        } else {
            // otherwise, need to stop timer
            clearInterval(this.state.timerID);
            // and clear out the necessary values along with resetting the timer
            this.setState({
                isRunning: !this.state.isRunning,
                timerID: null,
                time: 0
            })
        }
    }

    render() {
        return (
            <div className="App" >
                <div className="Timer">
                    <Timer time={this.state.time} />
                </div>
                <div className="StartButton StopButton">
                    <Button name="Start/Stop" onClick={this.handleClick} />
                    <Button name="Reset" onClick={this.handleRestart} />
                </div>
            </div>
        );
    }
}

export default App;

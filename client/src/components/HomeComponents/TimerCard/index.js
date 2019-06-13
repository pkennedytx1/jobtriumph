import React from 'react';
import ms from 'pretty-ms';

class TimerCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          time: 0,
          isOn: false,
          start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
    }
    stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setState({time: 0, isOn: false})
    }

    render() {

        let start = (this.state.time == 0) ? <button onClick={this.startTimer}>start</button> : null
        let stop = (this.state.time == 0 || !this.state.isOn) ? null : <button onClick={this.stopTimer}>stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ? null : <button onClick={this.startTimer}>resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ? null : <button onClick={this.resetTimer}>reset</button>

        return(
            <div>
                <div class="card">
                <div class="card-header">
                    <b>Work</b>Timer
                </div>
                <div class="card-body">
                    <h1 class="card-title">{this.state.time}</h1>
                    {start}
                    {resume}
                    {stop}
                    {reset}
                    <p class="card-text">Total Worktime and breaktime</p>
                </div>
                </div>
            </div>
        )
    }
}

export default TimerCard;
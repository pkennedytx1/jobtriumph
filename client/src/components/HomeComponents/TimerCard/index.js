import React from 'react';

class TimerCard extends React.Component {
    render() {
        return(
            <div>
                <div class="card">
                <div class="card-header">
                    <b>Work</b>Timer
                </div>
                <div class="card-body">
                    <h1 class="card-title">00:00</h1>
                    <a href="#" class="btn btn-primary">Start Working!</a>
                    <p class="card-text">Total Worktime and breaktime</p>
                </div>
                </div>
            </div>
        )
    }
}

export default TimerCard;
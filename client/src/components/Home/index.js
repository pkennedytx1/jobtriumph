import React from 'react';
import TimerCard from '../HomeComponents/TimerCard';

class Home extends React.Component{
    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <TimerCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
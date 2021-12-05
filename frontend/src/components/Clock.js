import React from 'react'

class Clock extends React.Component{

    constructor(props) {
        
        super(props)
        
        this.state = {
             date: new Date,
             timeElapsed: ''
        }
    }
    
    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    

    render(){
        return (
            <div className= "flex justify-center text-center font-semibold">
                <h4> Clock : {this.state.date.toLocaleTimeString()} </h4>
            </div>
        )
    }

}

export default Clock;
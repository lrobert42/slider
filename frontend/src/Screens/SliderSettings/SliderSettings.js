import React from 'react'
import Direction from '../TimelapseSettings/Direction.js'
import Button from '@material-ui/core/Button';

export default class SliderSettings extends React.Component{

constructor(props){
    super(props)
    this.state = {
        isSpinning:false,
        direction:1,
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.handleDirection = this.handleDirection.bind(this)

}


handleDirection(direction, change, changeType){
    this.setState({direction: direction})
}

clickHandler(){
    this.setState({isSpinning: !this.state.isSpinning}, function (){

        if (this.state.isSpinning){
            this.props.socket.emit('start_spin', this.state.direction);
        }
        else {
            this.props.socket.emit('stop_spin', "stop_spin");
        }

    })
}

render(){
    return(
        <>
        <h1>Slider settings</h1>
        <h3>Control the slider without shooting</h3>
        <Direction
        changeParams = {this.handleDirection}
        currentParams = {this.state.direction}
        disable={this.state.isSpinning}/>
        <Button variant="contained"
            color="primary"
            id="debug_button"
            onClick={this.clickHandler}>{this.state.isSpinning ? "Stop spinning" : "Spin motor"}</Button>
        </>
    )
}
}

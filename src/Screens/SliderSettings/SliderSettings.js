import React from 'react'
import Direction from '../TimelapseSettings/Direction.js'
import Button from '@material-ui/core/Button';

export default class SliderSettings extends React.Component{

constructor(props){
    super(props)
    this.state = {
        isSpinning:false
    }
    this.clickHandler = this.clickHandler.bind(this)

}

changeParams(i) {
    return (i === 0 ? 1 : 0)
}

clickHandler(){
    this.setState({isSpinning: !this.state.isSpinning}, function (){

        if (this.state.isSpinning){
            //TODO: Start spinning
        }
        else {
            // TODO: Stop spinning
        }

    })
}

render(){
    return(
        <>
        <h1>Slider settings</h1>
        <h3>Control the slider without shooting</h3>
        <Direction
        changeParams = {this.changeParams}
        currentParams = {1}
        disable={this.state.isSpinning}/>
        <Button variant="contained"
            color="primary"
            id="debug_button"
            onClick={this.clickHandler}>{this.state.isSpinning ? "Stop spinning" : "Spin motor"}</Button>
        </>
    )
}
}

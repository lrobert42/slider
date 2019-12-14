import React from 'react'
import Duration from './selectors/Duration.js'
import Fps from './selectors/Fps.js'
import Direction from './selectors/Direction.js'
import NoiseReduction from './selectors/NoiseReduction.js'

export default class SelectorForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recording:false,
            timelapseParams:{
                duration:0,
                fps:0,
                direction:0,
                noiseReduction:0
            }
        }
        this.handleStart = this.handleStart.bind(this)
    }

    handleStart(){
        this.setState({recording:true}, function(){
            console.log("Starting timelapse")
            this.props.recording(this.state.recording, this.state.timelapseParams)
        })
    }
    setParams(newParam, name){
        let newState = {...this.state.timelapseParams}
        switch(name){
            case "duration":
                newState.duration = newParam;
                break;
            case "direction":
                newState.direction = newParam;
                break;
            case "fps":
                newState.fps = newParam;
                break;
            case "noiseReduction":
                newState.noiseReduction = newParam;
                break;
            default:
                console.log("Error: param not found");
                break;
        }
        this.setState(newState, function(){
            console.log(name +" has been updated")
        })
    }

    render(){
        return(
            <>
                <h2>Timelapse settings</h2>
                <Duration handleChange = {this.setParams}/>
                <Fps handleChange = {this.setParams} />
                <Direction handleChange = {this.setParams} />
                <NoiseReduction handleChange = {this.setParams}/>

                <button onClick={this.handleStart}> Start recording </button>
            </>
        )
    }
}

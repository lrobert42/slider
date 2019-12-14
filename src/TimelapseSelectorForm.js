import React from 'react'
import Duration from './selectors/Duration.js'
import Fps from './selectors/Fps.js'
import Direction from './selectors/Direction.js'
import Distance from './selectors/Distance.js'
import NoiseReduction from './selectors/NoiseReduction.js'

export default class TimelapseSelectorForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recording:false,
            timelapseParams:{
                distance:0,
                durationSettings:{
                    timelapseDuration:true,
                    duration:0
                },
                fps:0,
                direction:0,
                noiseReduction:false
            }
        }
        this.handleStart = this.handleStart.bind(this)
        this.setParams = this.setParams.bind(this)
    }



    handleStart(){
        this.setState({recording:true}, function(){
            console.log("Starting timelapse")
            this.props.recording(this.state.recording, this.state.timelapseParams)
        })
    }

    setParams(newParam, name){

        let newState = this.state.timelapseParams
        switch(name){
            case "distance":
                newState.distance = newParam;
                break;
            case "duration":
                newState.durationSettings = newParam;
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
            let timelapseParams = this.state.timelapseParams
            this.props.handleParamsChange(timelapseParams, "timelapseParams")
        })
    }

    render(){
        return(
            <div>
                <h2>Timelapse settings</h2>
                <Duration changeParams = {this.setParams}/>
                <Direction changeParams = {this.setParams} />
                <Distance changeParams={this.setParams}/>
                <Fps changeParams = {this.setParams} />
                <NoiseReduction changeParams = {this.setParams}/>

            </div>
        )

    }
}





//<ExposureTime />
//<StepTime />
//
//

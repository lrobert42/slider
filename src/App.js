import React from 'react'
import RecordScreen from './RecordScreen.js'
import Navigation from './AppBar.js'


export default class App extends React.Component{
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
                fps:'',
                direction:'',

            },
            cameraParams:{
                noiseReduction:false,
                exposureTime:0,
                stepTime:0,
            },
            allSet:false,
            pause:false,
            recordingParameters:{
                elapsedTime:0,
                coveredDistance:0,
                shotsTaken:0,
            }
        }
        this.renderSelectform = this.renderSelectform.bind(this)
        this.handleParamsChange = this.handleParamsChange.bind(this)
        this.startRecording = this.startRecording.bind(this)
        this.setParams = this.setParams.bind(this)
    }

    handlePause(newParams){
        this.setState({pause:true})
    }

    resumeRecording(){
        this.setState({pause:false})
    }

    handleParamsChange(updatedState, name, bool){
        switch(name){
            case "timelapseParams":
                this.setState({timelapseParams:updatedState, timelapseAllSet:bool}, function(){
                    console.log(name +" has been updated")
                    console.log(this.state)

                });
                break;
            case "cameraParams":
                this.setState({cameraParams:updatedState, cameraAllSet:bool}, function(){
                    console.log(name +" has been updated")
                    console.log(this.state)
                });
                break;
            default:
                console.log("Error in params update");
                break;
        }
    }
    checkAllSet(){
        let cameraParams = this.state.cameraParams
        let timelapseParams = this.state.timelapseParams
        return (timelapseParams.fps !== 0 && timelapseParams.distance !== 0 &&
        timelapseParams.durationSettings.duration !== 0 && cameraParams.exposureTime !== 0 && cameraParams.stepTime !== 0)

    }

    setParams(newParam, name, origin){
    let newState
        switch(origin){
            case "timelapseParams":
                newState = this.state.timelapseParams;
                break;
            case "cameraParams":
                 newState = this.state.cameraParams;
                break;
            case "recordingParameters":
                 newState = this.state.recordingParameters;
                break;
            default:
                 newState = null;
                break;

        }
        switch(name){
            case "noiseReduction":
                newState.noiseReduction = newParam;
                break;
            case "exposureTime":
                newState.exposureTime = newParam;
                break;
            case "stepTime":
                newState.stepTime = newParam;
                break;
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
            default:
                console.log("Error: param not found");
                break;
    }
        this.setState({newState}, function(){
            let bool = this.checkAllSet();
            this.setState({allSet:bool})
        })
    }

    startRecording(){
        if (this.state.cameraAllSet && this.state.timelapseAllSet)
        {
            this.setState({recording:true})
        }
        else
        {
            alert("You must set all parameters before recording")
        }

    }

    renderSelectform(){
        if (this.state.recording === true)
        {
            return(
                <RecordScreen timelapseParams={this.state.timelapseParams}
                            cameraParams = {this.state.params}
                            handlePause = {this.handlePause}/>
            )
        }
        else
        {
            return(
                <Navigation handleParamsChange = {this.handleParamsChange}
                            startRecording = {this.startRecording}
                            resumeRecording = {this.resumeRecording}
                            setParams = {this.setParams}
                            timelapseParams = {this.state.timelapseParams}
                            cameraParams={this.state.cameraParams}/ >
            )
        }
    }

    render(){
        return(
            <>
            {this.renderSelectform()}
            </>
        )
    }
}

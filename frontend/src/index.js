import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RecordScreen from './Screens/RecordScreen/RecordScreen.js'
import Navigation from './Navigation/AppBar.js'

const io = require('socket.io-client')
const socket = io.connect('http://127.0.0.1:5000')

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recording:false,
            showLaunchButton:true,
            toggleCameraControl:false,
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
            recordingParameters:{
                elapsedTime:0,
                coveredDistance:0,
                shotsTaken:0,
            }
        }
        this.renderSelectform = this.renderSelectform.bind(this)
        this.startRecording = this.startRecording.bind(this)
        this.setParams = this.setParams.bind(this)
        this.handlePause = this.handlePause.bind(this)
        this.resumeRecording = this.resumeRecording.bind(this)
        this.cancelRecording = this.cancelRecording.bind(this)
        this.handleCameraControlSwitch = this.handleCameraControlSwitch.bind(this)

    }


    handleCameraControlSwitch(){
        this.setState({toggleCameraControl:!this.state.toggleCameraControl}, function(){
            console.log(this.state.toggleCameraControl)
        })
    }

    handlePause(newParams){
        this.setState({recording:false, showLaunchButton:false})
        //TODO PAUSE TIMER
    //    let timelapseParams = newParams;
    //    this.setState({timelapseParams});
        socket.emit('pause_timelapse', "pause");
    }

    checkAllSet(){
        let cameraParams = this.state.cameraParams
        let timelapseParams = this.state.timelapseParams
        return(true)
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
        if (this.state.allSet)
        {
            this.setState({recording:true})
            let object = [this.state.cameraParams, this.state.timelapseParams]
            socket.emit('launch_timelapse', object)
        }
        else
        {
            alert("You must set all parameters before recording")
        }

    }

    cancelRecording(){
        // TODO reset TIMER
        this.setState({showLaunchButton:true})
        socket.emit('cancel_recording', "cancel")
    }

    resumeRecording(){
        //TODO resume timer
        this.setState({recording:true})
        socket.emit('resume_recording', "resume")
    }

    renderSelectform(){
        if (this.state.recording === true )
        {
            return(
                <RecordScreen timelapseParams={this.state.timelapseParams}
                            cameraParams = {this.state.params}
                            handlePause = {this.handlePause}
                            socket = {socket}/>
            )
        }
        else
        {
            return(
                <Navigation startRecording = {this.startRecording}
                            resumeRecording = {this.resumeRecording}
                            cancelRecording = {this.cancelRecording}
                            setParams = {this.setParams}
                            timelapseParams = {this.state.timelapseParams}
                            cameraParams={this.state.cameraParams}
                            showLaunchButton={this.state.showLaunchButton}
                            toggleCameraControl = {this.state.toggleCameraControl}
                            handleCameraControlSwitch = {this.handleCameraControlSwitch}
                            socket = {socket}/ >
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



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
                fps:0,
                direction:0,
                noiseReduction:false
            },
            cameraParams:{
                exposureTime:0,
                iso:0,
                stepTime:0,
            }
        }
        this.renderSelectform = this.renderSelectform.bind(this)
        this.handleParamsChange = this.handleParamsChange.bind(this)
        this.startRecording = this.startRecording.bind(this)
    }

    handleParamsChange(updatedState, name){
        switch(name){
            case "timelapseParams":
                this.setState({timelapseParams:updatedState}, function(){
                    console.log(name +" has been updated")
                    console.log(this.state)
                });
                break;
            case "cameraParams":
                this.setState({cameraParams:updatedState}, function(){
                    console.log(name +" has been updated")
                    console.log(this.state)
                });
                break;
            default:
                console.log("Error in params update");
                break;
        }
    }

    startRecording(){
        //check all values are set
        this.setState({recording:true})
    }

    renderSelectform(){
        console.log(this.state)
        if (this.state.recording === true)
        {
            return(
                <RecordScreen timelapseParams={this.state.timelapseParams}/>
            )
        }
        else
        {
            return(
                <>
                <Navigation handleParamsChange = {this.handleParamsChange}
                            startRecording = {this.startRecording}/ >
                </>
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

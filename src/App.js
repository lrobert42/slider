import React from 'react'
import SelectorForm from './SelectorForm.js'
import RecordScreen from './RecordScreen.js'

export default class App extends React.Component{
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

    }

    handleRecording(recording, timelapseParams){

        // TODO: Send object to serv
        this.setState(recording)
        this.setState(timelapseParams)
    }

    renderSelectform(){
        if (this.state.recording === true)
        {
            return(
                <RecordScreen timelapseParams={this.state.timelapseParams}/>
            )
        }
        else
        {
            return(
                <SelectorForm />
            )
        }
    }

    render(){
        return(
            <>
            {this.renderSelectform}
            </>
        )
    }
}

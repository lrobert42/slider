import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const hoursArray = Array.from(Array(24).keys())

const sixtyArray = Array.from(Array(60).keys())


export default class Duration extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            durationSettings:{
                timelapse:true,
                duration:0
            },
            hours:0,
            minutes:0,
            seconds:0,
        }
        this.onSwitchChange = this.onSwitchChange.bind(this)
    }

    onSwitchChange(){
        let newState = this.state.durationSettings
        newState.timelapse = !this.state.durationSettings.timelapse

        this.setState({durationSettings:newState}, function(){
            console.log("Switching mode")
            this.props.changeParams(this.state.durationSettings, "duration")
        })
    }

    handleDurationChange(event, type){

        console.log(event)
        switch (type) {
            case "hours":
                if (event.target.value !== this.state.hours)
                    this.setState({hours:event.target.value}, function(){
                        this.updateDuration()
                    })

                break;
            case "minutes":
                if (event.target.value !== this.state.minutes)
                    this.setState({minutes:event.target.value}, function(){
                        this.updateDuration()
                    })
                break;
            case "seconds":
                if (event.target.value !== this.state.seconds)
                    this.setState({seconds:event.target.value}, function(){
                        this.updateDuration()
                    })
                break;
            default:
                console.log("Param not found")
        }


    }

    updateDuration(){
        let newDuration = this.state.durationSettings
        newDuration.duration = this.state.hours * 3600 + this.state.minutes * 60 + this.state.seconds
        this.setState({durationSettings:newDuration}, function(){
            this.props.changeParams(this.state.durationSettings, "duration")
        })
    }


render(){
    return(
        <div id="duration">
            <FormGroup row>
                <FormControlLabel
                control={
                    <Switch checked={this.state.durationSettings.timelapse} onChange={this.onSwitchChange} value="timelapse"/>
                }
                label="Timelapse duration"/>
                <InputLabel id="demo-simple-select-label">Hours</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.hours}
                  onChange={e => this.handleDurationChange(e, "hours")}
                >
                 {hoursArray.map(hours =>(
                     <MenuItem value={hours}> {hours} </MenuItem>))}
                </Select>

                <InputLabel id="demo-simple-select-label">Minutes</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.minutes}
                  onChange={e => this.handleDurationChange(e, "minutes")}
                >
                 {sixtyArray.map(minutes =>(
                 <MenuItem value={minutes}> {minutes} </MenuItem>))}
                </Select>

                <InputLabel id="demo-simple-select-label">Seconds</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.seconds}
                  onChange={e => this.handleDurationChange(e, "seconds")}
                >
                 {sixtyArray.map(seconds =>(
                 <MenuItem value={seconds}> {seconds} </MenuItem>))}
                </Select>
            </FormGroup>
        </div>
    )
}



}
import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


const StyledLabel = withStyles({
  root: {
      margin:"10px",
      marginTop:"12px",
      //color:"white"
  },
  label: {
    textTransform: 'capitalize',

  },
})(InputLabel);

const hoursArray = Array.from(Array(24).keys())

const sixtyArray = Array.from(Array(60).keys())


export default class Duration extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hours:Math.floor(this.props.currentParams.duration / 3600),
            minutes:Math.floor((this.props.currentParams.duration % 3600) / 60),
            seconds:((this.props.currentParams.duration % 3600) % 60)
        }
        this.onSwitchChange = this.onSwitchChange.bind(this)
    }

    onSwitchChange(){
        let newState = this.props.currentParams
        newState.timelapseDuration = !this.props.currentParams.timelapseDuration
        this.props.changeParams(newState, "duration", "timelapseParams")
    }

    handleDurationChange(event, type){
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
        let newDuration = this.props.currentParams
        newDuration.duration = this.state.hours * 3600 + this.state.minutes * 60 + this.state.seconds
        this.props.changeParams(newDuration, "duration", "timelapseParams")
    }


render(){
    return(
        <div id="duration">
            <FormGroup row>
                <FormControlLabel
                    labelPlacement ="top"
                control={
                    <Switch checked={this.props.currentParams.timelapseDuration} color="primary" onChange={this.onSwitchChange} value="timelapse"/>
                }
                label="Timelapse duration"/>
            <StyledLabel>Hours: </StyledLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.hours}
                  onChange={e => this.handleDurationChange(e, "hours")}
                >
                 {hoursArray.map(hours =>(
                     <MenuItem value={hours} key={hours}> {hours} </MenuItem>))}
                </Select>

                <StyledLabel>Minutes: </StyledLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.minutes}
                  onChange={e => this.handleDurationChange(e, "minutes")}
                >
                 {sixtyArray.map(minutes =>(
                 <MenuItem value={minutes} key={minutes}> {minutes} </MenuItem>))}
                </Select>

                 <StyledLabel >Seconds: </StyledLabel>
                <Select
                    label="Seconds"
                    labelPlacement="top"
                    id=""
                    value={this.state.seconds}
                    onChange={e => this.handleDurationChange(e, "seconds")}
                >
                 {sixtyArray.map(seconds =>(
                 <MenuItem value={seconds} key={seconds}> {seconds} </MenuItem>))}
                </Select>
            </FormGroup>
        </div>
    )
}



}

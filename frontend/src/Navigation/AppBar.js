import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import TimelapseSelectorForm from '../Screens/TimelapseSettings/TimelapseSelectorForm.js'
import CameraSelectorForm from '../Screens/CameraSettings/CameraSelectorForm.js'
import SliderSettings from '../Screens/SliderSettings/SliderSettings.js'


function WhichButton(props){
    if (props.showLaunchButton === true){
        return(<Button variant="contained"
            color="primary"
            onClick={props.startRecording}>Launch timelapse</Button>)
    }
    else{
    return(
        <>
            <Button variant="contained"
                color="primary"
                onClick={props.resumeRecording}>Resume timelapse</Button>
            <Button variant="contained"
                color="primary"
                onClick={props.cancelRecording}>Cancel timelapse</Button>
        </>
    )
    }
}


function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tab:0
        }
        this.handleChange = this.handleChange.bind(this)
        this.renderTabPanel = this.renderTabPanel.bind(this)

    }

    handleChange(e, value){
        this.setState({tab:value})
    }


    renderTabPanel(){
        if (this.props.toggleCameraControl === true)
        {
            return(
                <>
                <AppBar position="static" >
                    <Tabs value={this.state.tab} onChange={this.handleChange} centered>
                        <Tab label = "Timelapse settings"/>
                        <Tab label = "Camera settings"/>
                        <Tab label = "Preview"/>
                        <Tab label = "Slider settings"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.tab} index={0}>
                <TimelapseSelectorForm
                    setParams = {this.props.setParams}
                    currentParams = {this.props.timelapseParams}
                    toggleCameraControl={this.props.toggleCameraControl}
                    handleCameraControlSwitch = {this.props.toggleCameraControl}/>
                <WhichButton
                    showLaunchButton = {this.props.showLaunchButton}
                    startRecording = {this.props.startRecording}
                    cancelRecording = {this.props.cancelRecording}
                    resumeRecording = {this.props.resumeRecording}
                    />
            </TabPanel>
            <TabPanel value={this.state.tab}index={1}>
                <>
                <CameraSelectorForm
                    setParams = {this.props.setParams}
                    currentParams = {this.props.cameraParams}/>
                    <h1> Camera settings</h1>
                    <h2> Exposure time</h2>
                    <h2> Step time </h2>
                    <h2> ISO</h2>
                <WhichButton
                    showLaunchButton = {this.props.showLaunchButton}
                    startRecording = {this.props.startRecording}
                    cancelRecording = {this.props.cancelRecording}
                    resumeRecording = {this.props.resumeRecording}
                    />

                </>
            </TabPanel>
            <TabPanel value={this.state.tab} index={2}>
                <h1>Preview</h1>
                <h3> Insert preview from gphoto here</h3>
            </TabPanel>
            <TabPanel value={this.state.tab} index={3}>
                <SliderSettings socket={this.props.socket} />
            </TabPanel>
            </>
            )
        }
        else{
            return(
                <>
                <AppBar position="static" >
                    <Tabs value={this.state.tab} onChange={this.handleChange} centered>
                        <Tab label = "Timelapse settings"/>
                        <Tab label = "Slider settings"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.tab} index={0}>
                    <TimelapseSelectorForm
                        setParams = {this.props.setParams}
                        currentParams = {this.props.timelapseParams}/>
                    <WhichButton
                        showLaunchButton = {this.props.showLaunchButton}
                        startRecording = {this.props.startRecording}
                        cancelRecording = {this.props.cancelRecording}
                        resumeRecording = {this.props.resumeRecording}
                        />
                </TabPanel>
                <TabPanel value={this.state.tab} index={1}>
                    <SliderSettings socket={this.props.socket} />
                </TabPanel>
                </>
                )
            }

    }
    render(){
        return(
<>
    {this.renderTabPanel()}
</>
        )
    }
}

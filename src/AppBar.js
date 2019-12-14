import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import TimelapseSelectorForm from './selectors/TimelapseSelectorForm.js'
import CameraSelectorForm from './selectors/CameraSelectorForm.js'

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
    }

    handleChange(e, value){
        this.setState({tab:value})
    }
    render(){
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
                    currentParams = {this.props.timelapseParams}/>
                <Button variant="contained"
                    color="primary"
                    onClick={this.props.startRecording}>Launch timelapse</Button>
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
                    <Button variant="contained"
                        color="primary"
                        onClick={this.props.startRecording}>Launch timelapse</Button>

                </>
            </TabPanel>
            <TabPanel value={this.state.tab} index={2}>
                <h1>Preview</h1>
                <h3> Insert preview from gphoto here</h3>
            </TabPanel>
            <TabPanel value={this.state.tab} index={3}>
                <h1>Slider settings</h1>
                <h3>Control the slider without shooting</h3>
            </TabPanel>
            </>
        )
    }
}

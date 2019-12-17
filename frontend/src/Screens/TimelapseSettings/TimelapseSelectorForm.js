import React from 'react'
import Duration from './Duration.js'
import Fps from './Fps.js'
import Direction from './Direction.js'
import Distance from './Distance.js'
import CameraControl from './CameraControl.js'

export default function TimelapseSelectorForm(props){
        return(
            <div className = "timelapseSettings">
                <h2>Timelapse settings</h2>
                <CameraControl
                    toggleCameraControl={props.toggleCameraControl}
                    handleCameraControlSwitch = {props.handleCameraControlSwitch}/>
                <Duration
                    changeParams = {props.setParams}
                    currentParams = {props.currentParams.durationSettings}/>
                <div id="line">
                    <Direction
                        changeParams = {props.setParams}
                        currentParams = {props.currentParams.direction} />
                    <Distance
                        changeParams={props.setParams}
                        currentParams = {props.currentParams.distance}
                        />
                </div>
                <Fps
                    changeParams = {props.setParams}
                    currentParams = {props.currentParams.fps} />
            </div>
        )


}

import React from 'react'
import Duration from './Duration.js'
import Fps from './Fps.js'
import Direction from './Direction.js'
import Distance from './Distance.js'


export default function TimelapseSelectorForm(props){


        return(
            <div>
                <h2>Timelapse settings</h2>
                <Duration
                    changeParams = {props.setParams}
                    currentParams = {props.currentParams.durationSettings}/>
                <Direction
                    changeParams = {props.setParams}
                    currentParams = {props.currentParams.direction} />
                <Distance
                    changeParams={props.setParams}
                    currentParams = {props.currentParams.distance}
                    />
                <Fps
                    changeParams = {props.setParams}
                    currentParams = {props.currentParams.fps} />
            </div>
        )


}

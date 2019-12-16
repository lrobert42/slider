import React from 'react'
import NoiseReduction from './NoiseReduction.js'

export default function CameraSelectorForm(props){

return(
    <NoiseReduction
        changeParams = {props.setParams}
        currentParams = {props.currentParams.noiseReduction}/>
        )
}

//<ExposureTime />
//<StepTime />

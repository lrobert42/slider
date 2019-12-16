import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function NoiseReduction(props) {


  const onSwitchChange = event => {
    props.changeParams(!props.currentParams, "noiseReduction", "cameraParams")



  };

  return (
      <>

      <FormControlLabel
      control={
          <Switch
              checked={props.currentParams}
              onChange={onSwitchChange}
              value="noiseReduction"/>
      }
      label="Noise reduction"/>
      </>
  );
}

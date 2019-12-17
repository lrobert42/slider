import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function CameraControl(props) {
  return (
    <FormControl component="fieldset">
        <FormControlLabel
          value="top"
          control={<Switch color="primary" checked={props.toggleCameraControl} onChange={props.handleCameraControlSwitch}/>}
          label="Camera control"
          labelPlacement="top"
        />
    </FormControl>
  );
}

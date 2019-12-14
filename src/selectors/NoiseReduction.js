import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function NoiseReduction(props) {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = name => event => {
    props.changeParams(!state.checked, "noiseReduction")
    setState({ ...state, [name]: event.target.checked})


  };

  return (
      <>
      <h1> noise reduction </h1>
      <FormControlLabel
        control={
          <Switch
            checked={state.checked}
            onChange={handleChange('checked')}
            value="checked"
            color="primary"
          />
        }
        label="Enable noise reduction"
      />
      </>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {

    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Fps(props) {
  const classes = useStyles();
  const [fps, setFps] = React.useState('');
  const handleChange = event => {
    setFps(event.target.value);
    props.changeParams(event.target.value, "fps", "timelapseParams")
  };

  return (
    <div id="fps">
      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">Fps</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.currentParams}
          onChange={handleChange}
        >
          <MenuItem value={24}>24 Fps</MenuItem>
          <MenuItem value={25}>25 Fps</MenuItem>
          <MenuItem value={30}>30 Fps</MenuItem>
          <MenuItem value={60}>60 Fps</MenuItem>
          <MenuItem value={120}>120 Fps</MenuItem>
        </Select>
      </FormControl>



    </div>
  );
}

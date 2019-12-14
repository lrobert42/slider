import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Direction(props) {
  const classes = useStyles();

  const [direction, setDirection] = React.useState('');
  const handleChange = event => {
    setDirection(event.target.value);
    props.changeParams(event.target.value, "direction", "timelapseParams")
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Direction</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.currentParams}
          onChange={handleChange}
        >
          <MenuItem value={0}>Forward</MenuItem>
          <MenuItem value={1}>Backward</MenuItem>

        </Select>
      </FormControl>



    </div>
  );
}

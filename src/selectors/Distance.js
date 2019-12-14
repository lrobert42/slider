import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    marginTop:15
  },
  input: {
    width: 42,
    marginTop:1
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,

  },
  slider:{
      marginTop:35
  }
}));

export default function Distance(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props);

  const handleSliderChange = (event, newValue) => {

      if (newValue !== value){
          setValue(newValue);
          props.changeParams(Number(newValue), "distance", "timelapseParams")
      }

  };

  const handleInputChange = event => {

          let newValue = Number(event.target.value)
          if (newValue < 0)
          {
              props.changeParams(0, "distance")
              setValue(0)
          }
          else if (newValue > 100)
          {
              props.changeParams(100, "distance")
              setValue(100)
          }
          else{
              props.changeParams(newValue, "distance")
              setValue(newValue)
          }

  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root} id="distance">
        <FormControl className={classes.formControl}>
    <InputLabel id="demo-simple-select-label">Distance (cm)</InputLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider className={classes.slider}
            value={props.currentParams}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={props.currentParams}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
  </FormControl>
    </div>
  );
}

import React from 'react'
import Button from '@material-ui/core/Button';



export default class RecordScreen extends React.Component{
    constructor(props){
        super(props)

    }

    handleClick(){



        //Stop recording, stop timer, back to homescreen, add a "Resume" button
    }

    

    render(){
        return(
            <>
                <h1> recording </h1>
                <Button variant="contained"
                    color="primary"
                    onClick = {this.props.handleClick}> Pause timelapse </Button>

            </>

        )
    }
}

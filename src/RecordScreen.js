import React from 'react'

const elaspedTime = new Date()

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

                <button onClick={this.handleClick}/> 
            </>

        )
    }
}

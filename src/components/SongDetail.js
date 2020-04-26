import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if(!props.mySelectedSong){
        return <div>Select a song</div>
    }
    return (
    <div>
        <h3>Details For:</h3>
        <p>
            Title: {props.mySelectedSong.title}
            <br></br>
            Duration: {props.mySelectedSong.duration}
        </p>
       
    </div>
    )
}

//This function gets all states inside of store.
const mapStateToProps = (state) => {
   console.log('Yalcin', state)
    return {mySelectedSong: state.selectedSong};
}

//Connect function communicate with provider and get the latest changes at state and it send the state to component
//Second argument is selectSong that connect function take this one and pass to the component as prop. 
export default connect(mapStateToProps)(SongDetail);
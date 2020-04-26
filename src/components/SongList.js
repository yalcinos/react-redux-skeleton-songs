import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated right">
                        <button className="ui button primary" onClick={() =>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
            <div className="content">{song.title}</div>
            </div>
            );
        })
    }
    render(){
        console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}
//This function gets all states inside of store.
const mapStateToProps = (state) => {
    // console.log(state);
    return {songs: state.songs};
}

//Connect function communicate with provider and get the latest changes at state and it send the state to component
//Second argument is selectSong that connect function take this one and pass to the component as prop. 
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
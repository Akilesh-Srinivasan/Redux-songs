import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    //helper method
    renderedList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)}
                            >
                                select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    };

    render() {
        //console.log(this.props);
        return(
           <div className='ui divided list'>{this.renderedList()}</div> 
        );
    };
};
// mapStateToProps = it contains state(reducers) object that contains all data to show up as props inside our component
//going to be called with state
// everytime the state is updated , this functon gets called and gives new state
const mapStateToProps = (state) => {
    // console.log(state);
    //this return object contains songs as key with value as state.songs
    //the return object is going to show up as props inside the component
    return { songs: state.songs};
};
// selectsong is imported from actions and passed as an argument to connect function
// this selectsong will now act as prop and can be passed to the components
//try console logging props in render method and it will return selectsong function which is an actioncreater
// connect helps in connecting component and provider
export default connect(mapStateToProps, { selectSong })(SongList);

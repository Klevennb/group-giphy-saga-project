import React, {Component} from 'react';
import {connect} from 'react-redux';

class FavoriteItem extends Component {

    render(){
        return (
            <div>
            <span>{this.props.favorite.url}</span>
            <button onClick="addToFavorite">

            </button>
            </div>
        );
    }


}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(FavoriteItem);
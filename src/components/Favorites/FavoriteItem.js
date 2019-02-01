import React, {Component} from 'react';
import {connect} from 'react-redux';

class FavoriteItem extends Component {

    render(){
        return (
            <span>{this.props.favorite.url}</span>
        );
    }


}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(FavoriteItem);
import React, {Component} from 'react';
import {connect} from 'react-redux';

class FavoriteItem extends Component {

    render(){
        return (
            // <span>this will be the search results index return</span>
        );
    }


}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(FavoriteItem);
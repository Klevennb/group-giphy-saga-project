import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class Favorites extends Component{

    getFavorites = () => {
        axios({
            method: 'GET',
            url:'/api/favorite'
        }).then((response)=>{
            const action = {type: 'SET_FAVORITES', payload: response.data}
            this.props.dispatch(action);
        }).catch((error)=>{
            console.log('erorr in get', error);
        })
    }
    render()
    {
        return(
            <div>
                <p>

                </p>
            </div>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Favorites);
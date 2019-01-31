import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class Favorites extends Component{
    componentDidMount(){
        this.getFavorites();
    }
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

    // makeFavorite = () =>{
    //     let image = this.props.reduxStore.favoriteList
    //     axios({
    //         method: 'POST',
    //         url: '/api/favorite',
    //         data: image
    //     }).then((response))
    // }


    render()
    {
        return(
            
            <div>
                {this.props.reduxStore.favoriteList.map((image) => {

                {/* {JSON.stringify(this.props.reduxStore)} */}
                    return (
                        <div>
                        <p>{image.url}</p>
                        <button> Favorite </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Favorites);
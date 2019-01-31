import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';// import FavoriteIcon from '@material-ui/icons/Favorite';\
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteItem from './FavoriteItem.js';

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
    render()
    {
        return(
            <Card>
                    <Typography>
                    {/* {JSON.stringify(this.props.reduxStore.favoriteList)} */}
                    {this.props.reduxStore.favoriteList.map((favorite)=> {
                        return (
                    <FavoriteItem key={favorite.id} favorite={favorite} />
                        );
                    })}
                    </Typography>
                    <CardActions>
                    <IconButton onClick="addToFavorite">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>  
        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Favorites);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';// import FavoriteIcon from '@material-ui/icons/Favorite';\
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteItem from './FavoriteItem.js';

class Favorites extends Component{
    componentDidMount(){
        this.getFavorites();
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

            <Card>
                    <Typography>
                    {/* {JSON.stringify(this.props.reduxStore.favoriteList)} */}
                    {this.props.reduxStore.favoriteList.map((favorite)=> {
                        return (
                            <div><img src={favorite.images.fixed_width.url} /></div>
                        );
                    })}
                    </Typography>
                    <CardActions>

                </CardActions>
            </Card>  

        )
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Favorites);
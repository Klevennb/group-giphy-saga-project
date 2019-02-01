import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

class Search extends Component {
    render() {
        return (
            <Card>
                    <Typography>
                    {/* {JSON.stringify(this.props.reduxStore.favoriteList)} */}
                    {/* {this.props.reduxStore.favoriteList.map((favorite)=> {
                        return (
                    <FavoriteItem key={favorite.id} favorite={favorite} />
                        );
                    })} */}
                    </Typography>
                    <CardActions>
                    <IconButton onClick="addToFavorite">
                        
                    </IconButton>
                </CardActions>
            </Card> 
        )
    }
}

export default connect()(Search);
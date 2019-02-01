import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class SearchResultsItem extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
        }
    }
    getFavorites = () => {
        axios({
            method: 'GET',
            url: '/api/favorite'
        }).then((response) => {
            const action = { type: 'SET_FAVORITES', payload: response.data }
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('erorr in get', error);
        })
    }
    makeFavorite = () => {
        this.setState({
            url: this.props.result.images.fixed_width.url
        })

        let image = this.state.url
        axios({
            method: 'POST',
            url: '/api/favorite',
            data: image
        }).then((response) => {
            console.log('hey state', this.state);
            this.getFavorites();
        })

    }
    render() {
        return (
            <div><img src={this.props.result.images.fixed_width.url} />
            <button id={this.props.result.images.fixed_width.url}
             onClick={this.makeFavorite}>favorite</button> </div>
        );
    }


}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(SearchResultsItem);
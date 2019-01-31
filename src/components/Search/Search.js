import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }
    changeState = (event) => {
        this.setState({
            search: event.target.value
        })    
    }
    sendToServer = () => {
        
        
        
        axios({
            method: 'GET',
            url: `/search?q=${this.state.search}`,  //q can be anything, see router for other half

        }).then((response) => {
            console.log(response.data);
            
        }).catch ((error) => {
            console.log('Error in Get client', error);
            // response.sendStatus(500);
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.changeState} type='text' value={this.state.search}></input>
                <button onClick={this.sendToServer}>Search</button>
            </div>
        )
    }
}

export default connect()(Search);

// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = process.env.API_KEY;

// // route params are in the format '/:id'
// // query params are ?city=minneapolis
// router.get('/', (req, res) => {
//     const city = req.query.city;
//     axios({
//         method: 'GET',
//         url: `${BASE_URL}?q=${city}&APPID=${API_KEY}&units=imperial`
//     }).then((responseFromWeatherAPI) => {
//         // console.log(responseFromWeatherAPI);
//         // All the data would be responseFromWeatherAPI.data
//         // You could do a database INSERT here
//         res.send(responseFromWeatherAPI.data.main);
//     }).catch((error) => {
//         console.log('Error in GET', error);
//         res.sendStatus(500);
//     });
// });
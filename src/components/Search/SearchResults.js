import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchResults extends Component {
    appendToDOM =() => {
        return this.props.reduxStore.searchList.map((result)=>{
            console.log('!!!!!!', result.images.fixed_width.url);
            
            return <img src={result.images.fixed_width.url} />
            // return <h1>Hi</h1>;
                                    
        })
    }
        

// {this.props.reduxState.plantList.map((plant)=>{
//                         return <PlantRow key={plant.id} plant={plant} />
//                         }
    render(){
        return (
            <div>
            search results
                {this.appendToDOM()}
            </div>
            // <span>thisill bethe search results index return</span>
        );
    }


}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(SearchResults);
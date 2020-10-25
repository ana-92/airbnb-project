import React, { Component } from 'react';
import '../Home/Home.css';
import Spinner from '../../utility/Spinner/Spinner';
import axios from 'axios';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venues/Venues';

class Search extends Component {

    state = {
        activities: [],
        cities: [],
        venues: [],
        apiResponse: false,
    }

    async componentDidMount() {
        const searchTerm = this.props.match.params.searchTerm;
        const url = `${window.apiHost}/search/${searchTerm}`;
        const { data: { activities, cities, venues } } = await axios.get(url);
        this.setState({
            activities,
            cities,
            venues,
            apiResponse: true,
        })
    }

    render() {
        if (!this.state.apiResponse) {
            return <Spinner />
        }

        return (
            <div className="container-fluid lower-fold">
                <div className="row">
                    <div className="col s12">
                        <Cities cities={this.state.cities} header="Cities Matching Your Search" />
                    </div>
                    <div className="col s12">
                        <Activities activities={this.state.activities} header="Activities Matching Your Search" />
                    </div>
                    <div className="col s12">
                        <Venues venues={this.state.venues} header="Venues matching your search" />
                    </div>

                </div>
            </div>
        )
    }
}

export default Search;
import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Spinner from '../../utility/Spinner/Spinner'
import axios from 'axios';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';

class Home extends Component {
    state = {
        cities: [],
        europeCities: {},
        asiaCities: {},
        exoticCities: {},
        activities: [],
        venues: {}
    }

    async componentDidMount() {
        const recommendedUrl = `${window.apiHost}/cities/recommended`;
        const europeCitiesUrl = `${window.apiHost}/cities/europe`;
        const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
        const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;
        const activitiesUrl = `${window.apiHost}/activities/today`;
        const venuesUrl = `${window.apiHost}/venues/recommended`;

        const urls = [
            recommendedUrl,
            europeCitiesUrl,
            asiaCitiesUrl,
            exoticCitiesUrl,
            activitiesUrl,
            venuesUrl
        ];

        const promises = urls.map(url => axios.get(url));


        const [
            { data: cities },
            { data: europeCities },
            { data: asiaCities },
            { data: exoticCities },
            { data: activities },
            { data: venues }
        ] = await Promise.all(promises)

        this.setState({
            cities,
            europeCities,
            asiaCities,
            exoticCities,
            activities,
            venues
        });




    }

    render() {
        if (this.state.cities.length === 0) {
            return (<Spinner />);
        }

        return (<>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='home col s12'>
                        <div className='upper-fold'>
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid lower-fold'>
                <div className='row'>
                    <div className='col s12'>
                        <Cities cities={this.state.cities} header='Recommended Cities for you'></Cities>
                    </div>
                    <div className='col s12'>
                        <Activities activities={this.state.activities} header='Today in your area' />
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header}></Cities>
                    </div>

                    <div className='col s12'>
                        <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header}></Cities>
                    </div>

                    <div className='col s12'>
                        <Cities cities={this.state.exoticCities.cities} header={this.state.exoticCities.header}></Cities>
                    </div>
                </div>
            </div>
        </>
        )
    }

}

export default Home;
import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Spinner from '../../utility/Spinner/Spinner'
import axios from 'axios';
import Cities from '../../utility/City/Cities';

class Home extends Component {
    state = {
        cities: [],
        europeCities: {},
        asiaCities: {},
        exoticCities: {},
    }

    async componentDidMount() {
        const recommendedUrl = `${window.apiHost}/cities/recommended`;
        const europeCitiesUrl = `${window.apiHost}/cities/europe`;
        const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
        const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;
        let citiesPromises = [recommendedUrl, europeCitiesUrl, asiaCitiesUrl, exoticCitiesUrl];

        citiesPromises = citiesPromises.map(url => axios.get(url));

        const [
            { data: recommendedCities },
            { data: europeCities },
            { data: asiaCities },
            { data: exoticCities }
        ] = await Promise.all(citiesPromises)

        this.setState({
            cities: recommendedCities,
            europeCities,
            asiaCities,
            exoticCities
        })
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
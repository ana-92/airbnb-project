import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venues/Venues';

class CityVenues extends Component {

    state = {
        venues: [],
        header: "",
    }

    async componentDidMount() {
        const cityName = this.props.match.params.cityName;
        const url = `${window.apiHost}/venues/city/${cityName}`;
        const { data: { venues, header } } = await axios.get(url, { cityName })
        this.setState({
            venues,
            header,
        })
    }

    render() {
        if (!this.state.header) {
            return <Spinner />
        }
        return (
            <div className="row">
                <Venues venues={this.state.venues} header={this.state.header} />
            </div>
        )
    }
}
export default CityVenues;
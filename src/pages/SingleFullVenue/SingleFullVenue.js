import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Point from './Point';


class SingleFullVenue extends Component {
    state = {
        venue: {},
        points: [],
        guests: 1
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const venueUrl = `${window.apiHost}/venue/${id}`;
        const pointsUrl = `${window.apiHost}/points/get`;

        const promises = [
            axios.get(venueUrl),
            axios.get(pointsUrl),
        ];

        const [
            { data: venue },
            { data: pointData },
        ] = await Promise.all(promises)

        console.log(pointData)

        const points = venue.points.split(',').map((point, i) => {
            return (<Point key={i} pointDesc={pointData} point={point} />)
        })
        this.setState({ venue, points });
    }

    getPoints = () => {

    };

    render() {
        const { venue } = this.state;
        return (
            <div className='row single-venue'>
                <div className='col s12 center'>
                    <img src={venue.imageUrl}></img>
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{venue.location}</div>
                        <div className="title">{venue.title}</div>
                        <div className="guests">{venue.guests}</div>

                        <div className="divider"></div>

                        {this.state.points}

                        <div className="details">{venue.details}</div>
                        <div className="amenities">{venue.amenities}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SingleFullVenue;
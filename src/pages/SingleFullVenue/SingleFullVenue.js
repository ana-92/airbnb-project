import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Point from './Point';


class SingleFullVenue extends Component {
    state = {
        venue: {},
        points: [],
        guests: 1,
        checkIn: "",
        checkOut: "",
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


        const points = venue.points.split(',').map((point, i) => {
            return (<Point key={i} pointDescription={pointData} point={point} />)
        })
        this.setState({ venue, points });
    }

    changeNumberOfGuests = (e) => this.setState({ guests: e.target.value });
    changeCheckIn = (e) => this.setState({ checkIn: e.target.value });
    changeCheckOut = (e) => this.setState({ checkOut: e.target.value });
    reserve = () => { };

    render() {
        const { venue, checkIn, checkOut, guests } = this.state;
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
                    <div className="col s4 right-details">
                        <div className="price-per-day">${venue.pricePerNight} <span>per day</span></div>
                        <div className="rating">{venue.rating}</div>
                        <div className="col s6">
                            Check-In
                            <input type="date" onChange={this.changeCheckIn} value={checkIn} />
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date" onChange={this.changeCheckOut} value={checkOut} />
                        </div>

                        <div className="col s12">
                            <select className="browser-default" onChange={this.changeNumberOfGuests} value={guests}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guest</option>
                                <option value="3">3 Guest</option>
                                <option value="4">4 Guest</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                            <button onClick={this.reserve} className="btn red accent-2">Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SingleFullVenue;
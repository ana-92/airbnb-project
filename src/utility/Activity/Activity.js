import React, { Component } from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';

class Activity extends Component {

    render() {
        const { activityType, cost, image, rating, title, totalRatings } = this.props.activity;
        return (
            <div className='activity'>
                <img src={image}></img>
                <div className="activity-type">{activityType}</div>
                <div className="title">{title}</div>
                <div className="cost">From ${cost}/person</div>
                <div className="rating"><i className='material-icons'>start</i>
                    {rating}({totalRatings})</div>
            </div>
        )
    }

}

export default Activity;
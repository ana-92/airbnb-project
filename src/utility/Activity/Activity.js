import React, { Component } from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';

class Activity extends Component {

    render() {
        const { activityType, cost, id, image, rating, title, totalRating } = this.props.activity;
        return (
            <div className='activity'>
                <Link to={`/activity/${id}`}>
                    <img src={image}></img>
                    <div className="activity-type">{activityType}</div>
                    <div className="title">{title}</div>
                    <div className="cost">From ${cost}/person</div>
                    <div className="rating"><i className='material-icons'>start</i>
                        {rating}({totalRating})</div>
                </Link>
            </div>
        )
    }

}

export default Activity;
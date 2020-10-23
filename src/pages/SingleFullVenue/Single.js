import React, { Component } from 'react';
import './Single.css'
import axios from 'axios';

class Single extends Component {

    state = {
        data: {}
    }
    async componentDidMount() {
        const isCity = !!(this.props.match.params.cid);
        const id = this.props.match.params.cid || this.props.match.params.aid;
        const url = `${window.apiHost}/${isCity ? 'city' : 'activity'}/${id}`;

        const { data } = await axios.get(url);
        console.log(data)
        console.log(url)
        this.setState({ data })
    }

    render() {
        return (
            <div className='row single-venue'>
                <div className='col s12 center'>
                    <img src={this.state.data.image}></img>
                </div>
            </div>
        )
    }

}

export default Single;
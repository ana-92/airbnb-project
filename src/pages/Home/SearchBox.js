import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        where: '',
        checkIn: '',
        checkOut: '',
        guests: 0
    };

    changeWhere = (e) => this.setState({ where: e.target.value })
    changeCheckIn = (e) => this.setState({ checkIn: e.target.value })
    changeCheckOut = (e) => this.setState({ checkOut: e.target.value })

    render() {
        return (
            <div className='home-search-box col m4'>
                <h1>Book uniquie places to stay</h1>
                <form className='search-box-form'>
                    <div className='col m12'>
                        <div className='form-label'>where</div>
                        <div className='input-field' id='where'>
                            <input className='browser-default' type='text' onChange={this.changeWhere} placeholder='Anywhere' value={this.state.where}></input>
                        </div>
                    </div>
                    <div className='col m6'>
                        <div className='form-label'>check-in</div>
                        <div className='input-field' id='check-in'>
                            <input className='browser-default' type='date' onChange={this.changeCheckIn} value={this.state.checkIn}></input>
                        </div>
                    </div>

                    <div className='col m6'>
                        <div className='form-label'>check-out</div>
                        <div className='input-field' id='checkout'>
                            <input className='browser-default' type='date' onChange={this.changeCheckOut} value={this.state.checkOut}></input>
                        </div>
                    </div>

                    <div className='col m12'>
                        <div className='form-label'>guests</div>
                        <div className='input-field' id='where'>
                            <input className='browser-default' type='number' onChange={this.changeGuests} value={this.state.guests}></input>
                        </div>
                    </div>
                    <div className='col m12 submit-btn'>
                        <div className='input-field' id='submit-btn'>
                            <input className='btn-large waves-effect waves-light red accent-2' type='submit'></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBox;
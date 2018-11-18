import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component  {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange (event) {
        this.setState({term : event.target.value});
    }
    onFormSubmit (event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                     placeholder="City to show forecast"
                     type="text"
                     value={this.state.term}
                     onChange={this.onInputChange}
                     />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function  mapDispatchToProps (dispatch) {
   
    return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);

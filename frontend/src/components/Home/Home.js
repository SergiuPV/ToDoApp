import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import {  } from '../../redux';

import './Home.scss';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    componentDidMount() {
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
               Home page
               <br/>
               {this.state.count}
               {<button onClick={this.incrementCount}>click me!</button>}
               <br/>
               <Link to='/todo'>TO TODO APP</Link>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
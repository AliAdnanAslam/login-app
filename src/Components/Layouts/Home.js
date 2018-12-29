/**
 * Module dependencies
 */
import React, {Component} from 'react'
import Header from './Header';

/**
 * Main page of website
 *
 * @class Home
 */

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 style={{textAlign: "center"}}>Hello World</h1>
            </div>
        );
    }
}

export default Home;
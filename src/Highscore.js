import React, { Component } from 'react';

class Highscore extends Component {

    render() {
        if (this.props.overTen) {
            return (
                <h3>Best Highscore of 10
                    <button onClick={this.props.onReset}>Reset</button>
              
                </h3>
            )
        } else {
            return null;
        }
       
    }
}

export default Highscore;

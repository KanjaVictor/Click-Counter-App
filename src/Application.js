//Importing React and React's Component class so that we can create our own component.
import React, { Component } from 'react';
import Highscore from './Highscore';
import './css/style.css'

class Application extends Component {

    //1.
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(props, state) {
        if (this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
            console.log("Updating over ten");
            this.setState({ overTen: true })
        }
    }

    resetCount = (e) => {
        console.log("Event is", e);
        this.setState({
            count: 0,
            overTen: false
        });
    }
    //2.
    render() {
        //3.
        let {count} = this.state;

        return (
            <div>
                <h1>You clicked the button, {count} times</h1>
                <Highscore
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />

                <span>
                    <button onClick={(() => this.handleClick())}>Click Me</button>
                </span>
            </div>
        );
    }

}

//It doesn't export itself on its own so whenever a class is created and we want to use it in another file(Being imported in the other file)  
export default Application;



/*READ ME
 * 
 *1.//Runs only when the application component is instantiated.
 *2.//An essential method for a react component.
 *3.//Variables can be declared here
          //var can be used outside the function, so its not really safe let and const are preferred.

//Lifecycle of a component is based on variable cahnges and re-rendering
componentWillMount(props, state) {

}

componentDidMount(props, state) {
    console.log("Mounted with", props, state);
}

componentWillReceiveProps(props) {

}

componentWillUpdate(props, state) {
    if (this.props.name !== props.name) {
        //Do something
    }
}

componentDidUpdate(props, state) {

}*/
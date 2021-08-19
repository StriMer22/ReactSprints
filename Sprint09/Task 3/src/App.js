import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appData : `React Marathon`}
    }


    changeSize = () => {
        this.setState((state)=>{
            return {appData: state.appData.toLowerCase()}
        })
    }

    render() {
        return <div onClick={this.changeSize}> {this.state.appData} </div>
    }
}

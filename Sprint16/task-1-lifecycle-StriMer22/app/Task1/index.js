import React, { Component } from 'react';

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/list')
      .then(response => response.json())
      .then(result => this.setState({ list: result }));
  }

  render() {
    console.log(this.state.list);

    const styles = {
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      border: '1px solid black',
      marginLeft: '25px',
      padding: '5px 10px 5px 5px',
    };

    if (this.state.list) {
      return (
        <div className='container'>
          {this.state.list.map(el => {
            return (
              <div style={styles}>
                <p>id - {el.id}</p>
                <p>name - {el.name}</p>
                <p>note - {el.note}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return <>Loading...</>;
  }
}

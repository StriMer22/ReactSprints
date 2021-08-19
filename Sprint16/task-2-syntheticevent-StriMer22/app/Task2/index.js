import React, { Component } from 'react';

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: 'hidden text 1',
        },
        {
          id: 2,
          text: 'hidden text 2',
        },
        {
          id: 3,
          text: 'hidden text 3',
        },
      ],
      text: '',
    };
  }

  focus = event => {
    const ID = Number(event.target.id);
    const list = this.state.list;
    const searchValue = list.find(elem => {
      return elem.id === ID;
    });
    this.setState({ ...this.state, text: searchValue.text });
  };
  exit = () => {
    this.setState({ ...this.state, text: '' });
  };

  render() {
    return (
      <div className={'container'}>
        {this.state.list.map(el => {
          return (
            <div
              id={el.id}
              className={'element'}
              onMouseOut={this.exit}
              onMouseOver={this.focus}
              key={el.id}
            >
              id - {el.id}
            </div>
          );
        })}
        <div className={'text'}>{this.state.text}</div>
      </div>
    );
  }
}

import DataService from '../dataService';
import App from '../App';
import reactDom from '../index';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import React from 'react';
jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Sprint 14 task', () => {
  test('Test dataService', () => {
    new DataService().getGitHubUser().then(data => {
      return expect({}).toEqual(data);
    });
  });
  test('Test App.js', () => {
    expect(renderer.create(<App />)).toMatchSnapshot();
  });
});

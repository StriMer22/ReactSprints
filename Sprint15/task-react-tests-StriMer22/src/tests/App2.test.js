import DataService from '../dataService';
import App from '../App';
import reactDom from '../index';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import React from 'react';
jest.mock('react-dom', () => ({ render: jest.fn() }));
    describe("Application root", () => {
        test("should render without crashing", () => {
          const div = document.createElement('div');
          const stringMode = (<React.StrictMode><App/></React.StrictMode>);
          ReactDOM.render(stringMode, div);
          div.id = 'root';
          document.body.appendChild(div);
          require('../index');
          expect(ReactDOM.render).toHaveBeenCalledWith(stringMode, div)
        });
      });

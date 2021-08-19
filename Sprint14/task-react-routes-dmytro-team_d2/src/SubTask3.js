import React from 'react';
import { Redirect } from 'react-router-dom';

export function SubTask3(props) {
  return props.even ? (
    <div>Subtask3, protected information</div>
  ) : (
    <Redirect to='/' />
  );
}

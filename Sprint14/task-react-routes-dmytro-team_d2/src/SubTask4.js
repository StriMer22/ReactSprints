import React from 'react';
import { Redirect } from 'react-router-dom';

export function SubTask4(props) {
  return props.check ? (
    <div>Subtask4, navigated programmatically</div>
  ) : (
    <Redirect to='/' />
  );
}

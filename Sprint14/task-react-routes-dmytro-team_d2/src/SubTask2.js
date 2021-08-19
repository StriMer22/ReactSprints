import React from 'react';

export function SubTask2({ match, location }) {
  return (
    <div>
      Subtask2, query parameters:{' '}
      {location.search.slice(1).split('&').join(', ')}
    </div>
  );
}

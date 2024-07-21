import React from 'react';

export const SimpleList = ({
  listStyle,
  listTitle,
  children
  }) => {
  return (
    <div className={listStyle}>
      <p>{listTitle}</p>
      {children}
    </div>
  );
};

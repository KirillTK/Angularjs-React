import React from 'react';

export const ReactTest = (props) => {
  const { testService } = props;
  testService.test();
  return (<div className='container'>{props.nameTest}</div>);
};

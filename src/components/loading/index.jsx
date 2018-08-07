import React from 'react';
import Loading from './Loading';
import Error from './Error';

export default ({ isLoading, error }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return null;
};

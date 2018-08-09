import React, { Component } from 'react';
import Loading from './Loading';
import Error from './Error';

const Load = ({ isLoading, error }) => {
  if (isLoading) {
    return isLoading && <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return null;
};

export default Load;

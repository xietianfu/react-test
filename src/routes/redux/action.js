export const increment = data => {
  return {
    type: 'increment',
    data,
  };
};

export const decrement = data => {
  return {
    type: 'decrement',
    data,
  };
};

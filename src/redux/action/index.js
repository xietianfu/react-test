export const increment = counterCaption => {
  return {
    type: 'increment',
    counterCaption,
  };
};

export const decrement = counterCaption => {
  return {
    type: 'decrement',
    counterCaption,
  };
};

export const increment = counterCaption => {
  console.log(counterCaption);
  return {
    type: 'increment',
    counterCaption
  };
};

export const decrement = counterCaption => {
  return {
    type: 'decrement',
    counterCaption
  };
};

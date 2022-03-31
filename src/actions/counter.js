export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const incrementCounter = (payload = 1) => ({
  type: INCREMENT_COUNTER,
  payload,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

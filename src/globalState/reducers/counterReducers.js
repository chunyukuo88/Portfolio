export function increment(state){
  return state.value += 1;
}

export function decrement(state){
  return state.value -= 1;
}

export function incrementByAmount(state, action){
  return state.value += action.payload;
}
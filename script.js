import { reducer } from "./reducer.js"
import { createStore }  from "./store.js"

const initialState = {
    counter: 0
}


const store = createStore(initialState, reducer);

// TODO: SUBTRACT
// TODO: RESET

console.log("SCENARIO 1: Initial State Verification");
console.log("GETS STATE");
console.log(`initial state is :${initialState.counter}`);
console.log(`state from store is :${store.getState().counter}`);

console.log("SCENARIO 2: Incrementing the Counter");
console.log("Dispatch ADD once");
store.dispatch({ type: 'ADD' });
console.log("Dispatch ADD again state counter should be 2 now");
store.dispatch({ type: 'ADD' });
console.log(`state from store: ${store.getState().counter}`);




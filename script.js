import { reducer } from "./reducer.js"
import { createStore }  from "./store.js"

const initialState = {
    counter: 0
}


const store = createStore(initialState, reducer);

// TODO: ADD
// TODO: SUBTRACT
// TODO: RESET
// TODO: GET STATE

console.log("GETS STATE");
console.log(`initial state is :${initialState.counter}`);
console.log(`state from store is :${store.getState().counter}`);

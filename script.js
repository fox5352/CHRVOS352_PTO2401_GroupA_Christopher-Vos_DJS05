import { reducer } from "./reducer.js"
import { createStore }  from "./store.js"

const initialState = {
    counter: 0
}

const store = createStore(initialState, reducer);

const tags = {
    counter : document.getElementById("counter"),
    addBtn : document.getElementById("add"),
    subtractBtn : document.getElementById("subtract"),
    resetBtn : document.getElementById("reset"),
    removeSubscribeBtn : document.getElementById("remove-subscriber")
}

store.subscribe(function(state) {
    console.log("subscriber function trigger at update");
    console.log("state is :", state);
    
})

console.log("SCENARIO 1: Initial State Verification");
console.log("GETS STATE");
console.log(`initial state is :${initialState.counter}`);
console.log(`state from store is :${store.getState().counter}`);

console.log("");

console.log("SCENARIO 2: Incrementing the Counter");
console.log("Dispatch ADD once");
store.dispatch({ type: 'ADD' });
console.log("Dispatch ADD again state counter should be 2 now");
store.dispatch({ type: 'ADD' });
console.log(`state from store: ${store.getState().counter}`);

console.log("");

console.log("SCENARIO 3: Decrementing the Counter");
console.log(`state from store: ${store.getState().counter}`);
console.log("Dispatch SUBTRACT once state counter should be 1");
store.dispatch({type: "SUBTRACT"});
console.log(`state from store: ${store.getState().counter}`);

console.log("");

console.log("SCENARIO 4: Resetting the Counter");
console.log(`state from store: ${store.getState().counter}`);
console.log("Dispatch RESET counter should be 0");
store.dispatch({ type: "RESET" });
console.log(`state from store: ${store.getState().counter}`);


const unSubscriber = store.subscribe(function(state) {
    console.log("subscriber function trigger at update");
    tags.counter.textContent = state.counter;
})

tags.addBtn.addEventListener("click", ()=> {
    store.dispatch({ type: 'ADD' });
});

tags.subtractBtn.addEventListener("click", ()=> {
    store.dispatch({ type: 'SUBTRACT' });
});

tags.resetBtn.addEventListener("click", ()=> {
    store.dispatch({ type: 'RESET' });
});

tags.removeSubscribeBtn.addEventListener("click", ()=> {
    unSubscriber();
});
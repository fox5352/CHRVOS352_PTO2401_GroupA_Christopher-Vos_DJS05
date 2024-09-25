import { reducer } from "./reducer.js"
import { createStore }  from "./store.js"


// Pure function to create action creators
const createActionCreators = () => ({
    add: () => ({ type: 'ADD' }),
    subtract: () => ({ type: 'SUBTRACT' }),
    reset: () => ({ type: 'RESET' })
});

// Pure function to log state
const logState = (message, getState) => {
    // console.log(message);
    console.log(`${message} state from store: ${getState().counter}`);
};

// Pure function to run scenarios
const runScenarios = (store) => {
    const { getState, dispatch } = store;
    const actions = createActionCreators();// creates the predefined actions!!!!!!

    logState("SCENARIO 1: Initial State Verification", getState);

    console.log("");

    logState("SCENARIO 2: Incrementing the Counter", getState);
    dispatch(actions.add());// uses the action defined in function inside the dispatch function
    dispatch(actions.add());// uses the action defined in function inside the dispatch
    logState("After incrementing twice", getState);
    
    console.log("");
    
    logState("SCENARIO 3: Decrementing the Counter", getState);
    dispatch(actions.subtract());// uses the action defined in function inside the dispatch function
    logState("After decrementing once", getState);
    
    console.log("");

    logState("SCENARIO 4: Resetting the Counter", getState);
    dispatch(actions.reset());// uses the action defined in function inside the dispatch function
    logState("After resetting", getState);
}


// main ----------------------------------------------------------------
function main(){
    const initialState = { counter: 0 }
    const store = createStore(initialState, reducer);

    const unSub = store.subscribe((state)=> {
        console.log("subscriber state updated:", state);
    })

    runScenarios(store);/// runs the scenarios!!!!

    // unsubscribing when we are done
    unSub();
    
    console.log("");
    console.log("unsubbed ");
    
    store.dispatch({type: "ADD"})
    console.log("incremented state counter");
    
    console.log("after unsubscribing and incrementing state counter", store.getState().counter);
    console.log("subscriber didn't fire");    
}

main();
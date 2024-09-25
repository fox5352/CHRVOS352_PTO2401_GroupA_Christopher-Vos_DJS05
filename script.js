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
    console.log(message);
    console.log(`state from store: ${getState().counter}`);
    console.log("");
};

// Pure function to run scenarios
const runScenarios = (store) => {
    const { getState, dispatch } = store;
    const actions = createActionCreators();// creates the predefined actions!!!!!!

    logState("SCENARIO 1: Initial State Verification", getState);

    logState("SCENARIO 2: Incrementing the Counter", getState);
    dispatch(actions.add());// uses them
    dispatch(actions.add());// uses them
    logState("After incrementing twice", getState);
    
    logState("SCENARIO 3: Decrementing the Counter", getState);
    dispatch(actions.subtract());
    logState("After decrementing once", getState);

    logState("SCENARIO 4: Resetting the Counter", getState);
    dispatch(actions.reset());
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

    store.dispatch({type: "ADD"})
}

main();
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
    const actions = createActionCreators();

    logState("SCENARIO 1: Initial State Verification", getState);

    logState("SCENARIO 2: Incrementing the Counter", getState);
    dispatch(actions.add());
    dispatch(actions.add());
    logState("After incrementing twice", getState);
    
    logState("SCENARIO 3: Decrementing the Counter", getState);
    dispatch(actions.subtract());
    logState("After decrementing once", getState);

    logState("SCENARIO 4: Resetting the Counter", getState);
    dispatch(actions.reset());
    logState("After resetting", getState);
}

// Extras ----------------------------------------------------------------

// update the counter tag
const updateCounterTag = (value, element) => {
    element.textContent = value;
}

/**
 * 
 * @param {HTMLElement} element the element to attach the eventlistener to
 * @param {string} event the type of event
 * @param {()=>{}} action function to run when the event is fired
 * @returns a function to remove said event from the event list
 */
const setupEventListener = (element, event, action) => {
    element.addEventListener(event, ()=> action());
    return () => {
        element.removeEventListener(event, action);
    }
}


// Pure function to get DOM elements
const getDomElements = () => ({
    counter: document.getElementById("counter"),
    addBtn: document.getElementById("add"),
    subtractBtn: document.getElementById("subtract"),
    resetBtn: document.getElementById("reset"),
    removeSubscribeBtn: document.getElementById("remove-subscriber")
});

// main ----------------------------------------------------------------
function main(){
    const initialState = { counter: 0 }
    const store = createStore(initialState, reducer);

    runScenarios(store);

    // Extras ----------------------------------------------------------------
    
    const { 
        counter, 
        addBtn, 
        subtractBtn, 
        resetBtn, 
        removeSubscribeBtn 
    } = getDomElements();
    const actions = createActionCreators();
    
    const unSubscribe = store.subscribe((state)=> updateCounterTag(state.counter, counter));

    setupEventListener(addBtn, "click", ()=> store.dispatch(actions.add()));
    setupEventListener(subtractBtn, "click", ()=> store.dispatch(actions.subtract()));
    setupEventListener(resetBtn, "click", ()=> store.dispatch(actions.reset()));
    setupEventListener(removeSubscribeBtn, "click", ()=> unSubscribe());
}

main();
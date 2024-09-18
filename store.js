/**
 * @typedef {object} State
 */

/**
 * @typedef {object} Action
 * @prop {string} type
 * @prop {any} payload
 */

/**
 * @callback Subscriber
 * @param {State} state
 */

/**
 * @callback Unsubscribe
 */

/**
 * @callback Reducer
 * @param {State} prev
 * @param {Action} action
 */

/**
 * 
 * @param {any} initialState 
 * @param {Reducer} reducer
 */
export const createStore = (initialState, reducer) => {
    const state = [initialState]; // Changed to array with single initial state
    const subscribers = [];

     /**
     * Dispatch sends an event and updates the state
     * @param {Action} action
     */
    const dispatch = ({type, payload}) => {
        const action = {type, payload};
        update(action);
        subscribers.forEach(callback => callback(state[0]));
    }

    // updates the state of the store using the supplied action and reducer callback
    const update = (action) => {
        const prev = state[0];
        const next = reducer(prev, action);
        state.unshift(next);

        // TODO: check length of state history and remove last state if list to big
    }

    /**
     * 
     * @param {Subscriber} callback
     * @returns {Unsubscribe} a function that removes the subscribed callback
     */
    const subscribe = (callback) => {
        subscribers.push(callback);
        return () => {
            const index = subscribers.indexOf(callback);
            if (index > -1) subscribers.splice(index, 1);
        };
    }

    /**
     * Returns the current state of the store
     * @returns {State}
     */
    const getState = () => {
        return state[0];
    }

    return {
        dispatch,
        subscribe,
        getState,
    }
}
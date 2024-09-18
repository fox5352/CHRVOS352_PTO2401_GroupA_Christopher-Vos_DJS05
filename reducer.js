
export function reducer(state, action) {
    const {type, payload} = action;

    switch (type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        case "RESET":
            return {...state, counter: 0};
        default:
            return state;
    }
}
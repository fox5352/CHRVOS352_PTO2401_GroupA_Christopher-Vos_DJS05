
export function reducer(state, action) {
    const {type, payload} = action;

    switch (type) {
        case 'ADD':
            return {...state, counter: state.counter + 1};
        case 'SUBTRACT':
            return {...state, counter: state.counter - 1};
        case "RESET":
            return {...state, counter: 0};
        default:
            return state;
    }
}
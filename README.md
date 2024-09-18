# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

# Redux-inspired Store Implementation

This project implements a simplified version of a Redux-like store in JavaScript, providing state management functionality with actions, reducers, and subscriptions.

## How to Run the Code

1. Ensure you have a modern web browser installed.
2. Open the `index.html` file using a local server. You can use one of the following methods:
   - Use the Live Server extension in Visual Studio Code.
   - Use any other local server solution you prefer.

## Overview of the Approach

This implementation consists of three main files:

1. `index.html`: The HTML file that sets up the UI and includes the necessary scripts.
2. `store.js`: Contains the core functionality of the Redux-inspired store.
3. `scripts.js`: Demonstrates the usage of the store, including state management and UI updates.
3 `reducer.js`: creates a basic implementation of a reducer

The store implementation provides the following key features:

- State management using a reducer function
- Action dispatching to update the state
- Subscription mechanism to react to state changes
- Ability to get the current state

## Challenges Faced and Solutions

1. **Immutability**: Ensuring immutability of the state was crucial. This was addressed by creating a new state object in the reducer for each action, rather than modifying the existing state.

2. **Subscription Management**: Implementing a clean way to subscribe and unsubscribe from state changes was challenging. This was solved by returning an unsubscribe function from the `subscribe` method.

3. **Typing and Documentation**: To improve code readability and maintainability, JSDoc comments were added to provide type information and descriptions for functions and parameters.

## Potential Improvements

1. Implement an undo function to revert to previous states.
2. Add a replace reducer function for hot reloading functionality.
3. Enhance error handling and validation for actions and state updates.

## Best Practices Applied

- Use of ES6 modules for better code organization
- Consistent naming conventions
- Clear separation of concerns between store logic and usage
- Comprehensive comments and documentation
- Immutable state updates

Feel free to explore the code and experiment with the implementation!
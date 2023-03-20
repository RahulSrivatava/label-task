import React from "react";
import LabelStudio from "./LabelStudio"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const initialState = {
  rects: [],
};

function annotationReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECT':
      return {
        ...state,
        rects: [...state.rects, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(annotationReducer);

function App() {
  return (
    <Provider store={store}>
      <LabelStudio />
    </Provider>
  );
}

export default App;

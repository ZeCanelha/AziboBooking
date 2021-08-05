import React, { useReducer } from "react";

import predefinedState from "./predefinedState";

import produce from "immer";

const initialState = predefinedState;

function storeReducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_ITEM":
      return produce(state, (draft) => {
        draft.rentItems.push(action.payload);
      });
    case "ADD_NEW_BOOKING":
      return produce(state, (draft) => {
        draft.rentItems[action.payload.index].bookings.push(
          action.payload.booking
        );
      });
    case "UPDATE_ITEM_NAME": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.index].name = action.payload.name;
      });
    }
    case "UPDATE_ITEM_PRICE": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.index].price = action.payload.price;
      });
    }
    case "CANCEL_ITEM_ENTRY": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.index].bookings.splice(
          action.payload.bookingIndex,
          1
        );
      });
    }

    case "UPDATE_ITEM_DURATION": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].duration = action.payload.duration;
      });
    }
    case "UPDATE_ITEM_HOUR": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].time.hours = action.payload.hours;
      });
    }
    case "UPDATE_ITEM_MINUTE": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].time.minutes = action.payload.minutes;
      });
    }

    case "UPDATE_ITEM_STATUS": {
      return produce(state, (draft) => {
        draft.rentItems[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].completed = true;
      });
    }
    case "CANCEL_REGIST": {
      return initialState;
    }
    case "NEW_REGIST": {
      return { ...state, seessionActive: true };
    }
    default:
      return state;
  }
}

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;

import React, { useReducer } from "react";

const initialState = {
  rentItems: [],
  seessionActive: false,
};

function storeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_ITEM":
      return { ...state, rentItems: [...state.rentItems, action.payload] };
    case "ADD_NEW_BOOKING":
      let newState = { ...state };

      newState.rentItems[action.payload.index].bookings.push(
        action.payload.booking
      );
      return newState;
    case "UPDATE_ITEM_NAME": {
      let newState = { ...state };
      newState.rentItems[action.payload.index].name = action.payload.name;
      return newState;
    }
    case "UPDATE_ITEM_PRICE": {
      let newState = { ...state };
      newState.rentItems[action.payload.index].price = action.payload.price;
      return newState;
    }
    case "CANCEL_ITEM_ENTRY": {
      let newState = { ...state };
      newState.rentItems[action.payload.index].bookings.splice(
        action.payload.bookingIndex,
        1
      );
      return newState;
    }

    case "UPDATE_ITEM_DURATION": {
      let newState = { ...state };
      newState.rentItems[action.payload.itemIndex].bookings[
        action.payload.bookingIndex
      ].duration = action.payload.duration;
      return newState;
    }
    case "UPDATE_ITEM_HOUR": {
      let newState = { ...state };
      newState.rentItems[action.payload.itemIndex].bookings[
        action.payload.bookingIndex
      ].time.hours = action.payload.hours;
      return newState;
    }
    case "UPDATE_ITEM_MINUTE": {
      let newState = { ...state };
      newState.rentItems[action.payload.itemIndex].bookings[
        action.payload.bookingIndex
      ].time.minutes = action.payload.minutes;
      return newState;
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

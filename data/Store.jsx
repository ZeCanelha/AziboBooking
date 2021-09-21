import React, { useReducer, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import predefinedState from "./predefinedState";
import produce from "immer";
import AppLoading from "expo-app-loading";

const initialState = predefinedState;

function storeReducer(state, action) {
  switch (action.type) {
    case "LOAD_STATE":
      return action.payload;
    case "ADD_NEW_ITEM":
      return produce(state, (draft) => {
        draft.bookings.push(action.payload);
      });
    case "UPDATE_NOTES_TEXT":
      return produce(state, (draft) => {
        draft.notes = action.payload;
      });
    case "ADD_NEW_BOOKING":
      return produce(state, (draft) => {
        draft.bookings[action.payload.index].bookings.push(
          action.payload.booking
        );
      });
    case "UPDATE_ITEM_NAME": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.index].name = action.payload.name;
      });
    }
    case "UPDATE_ITEM_PRICE": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.index].price = action.payload.price;
      });
    }
    case "CANCEL_ITEM_ENTRY": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.index].bookings.splice(
          action.payload.bookingIndex,
          1
        );
      });
    }

    case "UPDATE_ITEM_DURATION": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].duration = action.payload.duration;
      });
    }
    case "UPDATE_ITEM_HOUR": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].time.hours = action.payload.hours;
      });
    }
    case "UPDATE_ITEM_MINUTE": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].time.minutes = action.payload.minutes;
      });
    }

    case "UPDATE_ITEM_STATUS": {
      return produce(state, (draft) => {
        draft.bookings[action.payload.itemIndex].bookings[
          action.payload.bookingIndex
        ].completed = true;
      });
    }
    case "CANCEL_REGIST": {
      return initialState;
    }
    case "NEW_REGIST": {
      return { ...state };
    }
    default:
      return state;
  }
}

const getState = async () => {
  try {
    const state = await AsyncStorage.getItem("@app_state");
    return state ? JSON.parse(state) : null;
  } catch (e) {
    console.log("Failed to fetch the data from storage");
  }
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    async function fetchState() {
      const state = await getState();
      console.log(state);
      setIsLoading(false);
      if (state) dispatch({ type: "LOAD_STATE", payload: state });
    }
    fetchState();
  }, []);

  useEffect(() => {
    if (state) {
      console.log("Setting state to storage: \n" + state);
      AsyncStorage.setItem("@app_state", JSON.stringify(state));
    }
  }, [state]);

  if (isLoading) {
    return <AppLoading></AppLoading>;
  }
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;

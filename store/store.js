export const initialState = {
  rentItems: [],
  activeSession: false,
};

export function storeReducer(state = initialStateaction, action) {
  switch (action.type) {
    case "CHANGE_ITEM_NAME":
      return {
        ...state,
        rentItems: [
          state.rentItems[action.payload.target],
          {
            ...state.rentItems[action.payload.target],
            name: action.payload.name,
          },
        ],
      };
  }
}

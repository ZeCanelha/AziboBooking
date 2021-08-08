export function addNewItem() {
  const defaultState = {
    id: Math.random(Math.floor(1 + 100) * 100 - 1),
    name: "Gaivota",
    price: "10",
    bookings: [],
  };

  return {
    type: "ADD_NEW_ITEM",
    payload: defaultState,
  };
}

export function updateNotesText(text) {
  return {
    type: "UPDATE_NOTES_TEXT",
    payload: text,
  };
}

export function addNewBooking(index) {
  let minutes = new Date().getMinutes().toString();
  let min = "0";
  if (minutes < 10) {
    min += minutes;
  } else {
    min = minutes;
  }
  const booking = {
    completed: false,
    time: {
      hours: new Date().getHours().toString(),
      minutes: min,
    },
    duration: "1",
  };

  return {
    type: "ADD_NEW_BOOKING",
    payload: { index, booking },
  };
}

export function updateItemName(index, name) {
  return {
    type: "UPDATE_ITEM_NAME",
    payload: { index, name },
  };
}
export function updateItemPrice(index, price) {
  return {
    type: "UPDATE_ITEM_PRICE",
    payload: { index, price },
  };
}

export function cancelItemEntry(index, bookingIndex) {
  return {
    type: "CANCEL_ITEM_ENTRY",
    payload: { index, bookingIndex },
  };
}

export function updateItemDuration(duration, itemIndex, bookingIndex) {
  return {
    type: "UPDATE_ITEM_DURATION",
    payload: { duration, itemIndex, bookingIndex },
  };
}
export function updateItemHour(hours, itemIndex, bookingIndex) {
  return {
    type: "UPDATE_ITEM_HOUR",
    payload: { hours, itemIndex, bookingIndex },
  };
}
export function updateItemMinute(minutes, itemIndex, bookingIndex) {
  return {
    type: "UPDATE_ITEM_MINUTE",
    payload: { minutes, itemIndex, bookingIndex },
  };
}
export function updateItemStatus(itemIndex, bookingIndex) {
  return {
    type: "UPDATE_ITEM_STATUS",
    payload: { itemIndex, bookingIndex },
  };
}

export function cancelRegist() {
  return {
    type: "CANCEL_REGIST",
  };
}

export function newRegist() {
  return {
    type: "NEW_REGIST",
  };
}

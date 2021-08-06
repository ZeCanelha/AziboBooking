const predefinedState = {
  name: `Registo do dia ${new Date().getDay()}/${new Date().getMonth()}`,
  bookings: [
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Vermelha 1",
      price: "12",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Vermelha 2",
      price: "12",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Verde",
      price: "12",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Amarela",
      price: "12",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "4",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "5",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "6",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Algarvia Clara",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Algarvia Escura",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Cisne",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Pato",
      price: "10",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Paddle 1",
      price: "8",
      bookings: [],
    },
    {
      id: Math.random(Math.floor(1 + 100) * 100 - 1),
      name: "Caiaque 1",
      price: "10",
      bookings: [],
    },
  ],
};

export default predefinedState;

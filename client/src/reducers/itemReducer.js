import uuid from "uuid";

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Apples" },
    { id: uuid(), name: "Bananas" },
    { id: uuid(), name: "Trial Mix" },
    { id: uuid(), name: "Cookies" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}

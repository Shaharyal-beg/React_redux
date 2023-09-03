import { ADD_TO_CART } from "../Constant";

const intialState = {
  cardData: [],
};
export default function cartItems(state = intialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer", action);
      return {
        ...state,
        carddata: action.data,
      };
      break;
    default:
      return state;
  }
}

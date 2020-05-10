import { GET_PRODUCTS_SUCCESS } from "../../actions/features/products";

const InitialState = {
  products: [],
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: [...action.payload] };
    default:
      return state;
  }
}

import {
  GET_PRODUCTS_SUCCESS,
  SET_PAGE_INDEX,
} from "../../actions/features/products";

const InitialState = {
  items: [],
  count: 0,
  pageIndex: 1,
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        count: action.payload.count,
      };
    case SET_PAGE_INDEX:
      return { ...state, pageIndex: action.index };
    default:
      return state;
  }
}

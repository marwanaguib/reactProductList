import {
  GET_PRODUCTS_SUCCESS,
  SET_PAGE_INDEX,
  GET_DEPARTMENTS_SUCCESS,
  SET_FILTER,
} from "../../actions/features/products";

const InitialState = {
  items: [],
  count: 0,
  pageIndex: 1,
  departments: [],
  filters: {},
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        count: action.payload.count,
      };
    case GET_DEPARTMENTS_SUCCESS:
      return { ...state, departments: [...action.payload] };
    case SET_PAGE_INDEX:
      return { ...state, pageIndex: action.index };
    case SET_FILTER:
      return { ...state, filters: { ...state.filters, ...action.filters } };
    default:
      return state;
  }
}

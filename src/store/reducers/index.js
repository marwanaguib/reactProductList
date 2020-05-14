import { combineReducers } from "redux";
import shared from "./utils/axios";
import products from "./features/products";

export default combineReducers({
  shared,
  products,
});

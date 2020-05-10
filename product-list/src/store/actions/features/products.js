import api from "../../../utils/axios";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getProductsAPI = () => (dispatch) => {
  return api.get(`/posts`, { data: {} });
};

export const getProducts = () => (dispatch) => {
  return dispatch(getProductsAPI()).then((response) =>
    response ? dispatch(getProductsSuccess(response.data)) : ""
  );
};

import api from "../../../utils/axios";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const SET_PAGE_INDEX = "SET_PAGE_INDEX";

export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getProductsAPI = (index) => (dispatch) => {
  return api.get(`/products/${index}`, { data: {} });
};

export const getProducts = (index) => (dispatch) => {
  return dispatch(getProductsAPI(index)).then((response) =>
    response ? dispatch(getProductsSuccess(response.data)) : ""
  );
};

export const setPageIndex = (index) => {
  return {
    type: SET_PAGE_INDEX,
    index,
  };
};

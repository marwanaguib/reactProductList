import api from "../../../utils/axios";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_DEPARTMENTS_SUCCESS = "GET_DEPARTMENTS_SUCCESS";
export const SET_PAGE_INDEX = "SET_PAGE_INDEX";
export const SET_FILTER = "SET_FILTER";

export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getProductsAPI = (index, pageCount, filters) => (dispatch) => {
  return api.post(`/products`, { pageIndex: index, pageCount, ...filters });
};

export const getProducts = (index, pageCount, filters) => (dispatch) => {
  return dispatch(getProductsAPI(index, pageCount, filters)).then((response) =>
    response ? dispatch(getProductsSuccess(response.data)) : ""
  );
};

export const setPageIndex = (index) => {
  return {
    type: SET_PAGE_INDEX,
    index,
  };
};

export const getDepartmentsSuccess = (payload) => {
  return {
    type: GET_DEPARTMENTS_SUCCESS,
    payload,
  };
};

export const getDepartmentsAPI = () => (dispatch) => {
  return api.get(`/departments`, { data: {} });
};

export const getDepartments = () => (dispatch) => {
  return dispatch(getDepartmentsAPI()).then((response) =>
    response ? dispatch(getDepartmentsSuccess(response.data)) : ""
  );
};

export const setFilter = (filters) => {
  return {
    type: SET_FILTER,
    filters,
  };
};

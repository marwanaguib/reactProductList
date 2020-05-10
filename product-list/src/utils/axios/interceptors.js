import api from "./index";
import { connect } from "react-redux";
import React from "react";

import { toggleLoader, errMsg } from "../../store/actions/utils/axios";

function Interceptor(props) {
  // Add a request interceptor
  api.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      props.toggleLoader();
      return config;
    },
    function (error) {
      // Do something with request error
      props.errMsg(error.message);
      // return Promise.reject(error);
    }
  );

  // Add a response interceptor
  api.interceptors.response.use(
    function (response) {
      props.toggleLoader();
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      props.errMsg(error.message);
      // return Promise.reject(error);
    }
  );

  return (
    <div>
      {props.isLoading ? <div className="preloader"></div> : ""}
      {props.errorMsg && props.errorMsg !== "" ? (
        <div className="error">{props.errorMsg}</div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapDispatchToProps = {
  toggleLoader,
  errMsg,
};

const mapStateToProps = (state) => ({
  isLoading: state.shared.isLoading,
  errorMsg: state.shared.errorMsg,
});

export default connect(mapStateToProps, mapDispatchToProps)(Interceptor);

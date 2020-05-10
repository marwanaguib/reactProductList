import api from "./index";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { toggleLoader, errMsg } from "../../store/actions/utils/axios";
import { Loader } from "../../assets/styles/common";

function Interceptor({ toggleLoader, errMsg, isLoading, errorMsg }) {
  useEffect(() => {
    // Add a request interceptor
    api.interceptors.request.use(
      function (config) {
        toggleLoader();
        return config;
      },
      function (error) {
        errMsg(error.message);
      }
    );

    // Add a response interceptor
    api.interceptors.response.use(
      function (response) {
        toggleLoader();
        return response;
      },
      function (error) {
        errMsg(error.message);
      }
    );
  }, [toggleLoader, errMsg]);

  useEffect(() => {
    if (errorMsg && errorMsg !== "") {
      toast(errorMsg, {});
    }
  }, [errorMsg]);

  return (
    <>
      {isLoading ? <Loader /> : ""}
      {errorMsg && errorMsg !== "" && <ToastContainer autoClose={8000} />}
    </>
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

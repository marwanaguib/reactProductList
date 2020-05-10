import { TOGGLE_LOADER, ERR_MSG } from "../../actions/utils/axios";

const initialState = {
  isLoading: false,
  errorMsg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return { ...state, isLoading: !state.isLoading };

    case ERR_MSG:
      return { ...state, errorMsg: action.msg, isLoading: false };

    default:
      return state;
  }
}

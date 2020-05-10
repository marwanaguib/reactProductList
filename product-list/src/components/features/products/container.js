import { connect } from "react-redux";

import { getProducts } from "../../../store/actions/features/products";

function mapStateToProps(state) {
  return {
    // accountState: getAccountState(state),
    // apiKeys: getApiKeysState(state),
    // colorScheme: state.colorScheme,
  };
}

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps);

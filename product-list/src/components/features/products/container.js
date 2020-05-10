import { connect } from "react-redux";

import {
  getProducts,
  setPageIndex,
} from "../../../store/actions/features/products";

function mapStateToProps(state) {
  return {
    products: state.products.items,
    count: state.products.count,
    pageIndex: state.products.pageIndex,
    filters: state.products.filters,
  };
}

const mapDispatchToProps = {
  getProducts,
  setPageIndex,
};

export default connect(mapStateToProps, mapDispatchToProps);

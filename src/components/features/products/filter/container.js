import { connect } from "react-redux";

import {
  getDepartments,
  setFilter,
} from "../../../../store/actions/features/products";

function mapStateToProps(state) {
  return {
    departments: state.products.departments,
  };
}

const mapDispatchToProps = {
  getDepartments,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps);

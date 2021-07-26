import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const DisplayEduDetails = (props) => {
  return <div></div>;
};

DisplayEduDetails.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEduDetails);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Dashboard = (props) => {
  return <div>Dashboard Works</div>;
};

Dashboard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

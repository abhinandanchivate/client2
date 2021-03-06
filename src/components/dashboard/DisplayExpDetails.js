import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import moment from "moment";

export const DisplayExpDetails = ({ exp }) => {
  const experiences = exp.map((e) => (
    <tr key={e._id}>
      {" "}
      <td>{e.company}</td>
      <td className="hide-sm">{e.title}</td>
      <td>
        {" "}
        <Moment format="YYYY/DD/MM">{moment.utc(e.from)}</Moment> -{"   "}
        {e.to === null ? (
          "Now"
        ) : (
          <Moment format="YYYY/DD/MM">{moment.utc(e.to)}</Moment>
        )}
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

DisplayExpDetails.propTypes = {
  exp: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayExpDetails);

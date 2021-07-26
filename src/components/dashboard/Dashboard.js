import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profileAction";
import DashboardAction from "./DashboardAction";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { DisplayEduDetails } from "./DisplayEduDetails";
import { DisplayExpDetails } from "./DisplayExpDetails";

export const Dashboard = ({
  auth: { user },
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  const deleteAccount = () => {};
  // useEffect : which will help us to initialize the component : ngoninit componentdidmount : init work.
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardAction />
          <DisplayEduDetails></DisplayEduDetails>
          <DisplayExpDetails exp={profile.experience}></DisplayExpDetails>

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = { getCurrentProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

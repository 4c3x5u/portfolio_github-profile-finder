import React from 'react';
import PropTypes from 'prop-types';
import Single from '../Shared/Single/Single';

const FollowingSingle = ({ following }) => <Single section="Following" item={following} />;

FollowingSingle.propTypes = {
  following: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default FollowingSingle;

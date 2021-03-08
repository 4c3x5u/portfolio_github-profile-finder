import React from 'react';
import PropTypes from 'prop-types';
import Single from '../Shared/Single/Single';

const FollowersSingle = ({ follower }) => <Single section="Followers" item={follower} />;

FollowersSingle.propTypes = {
  follower: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default FollowersSingle;

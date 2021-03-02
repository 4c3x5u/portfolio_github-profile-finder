import axios from 'axios';

export const searchUser = (searchParam, userFound, userNotFound) => (
  axios
    .get(`https://api.github.com/users/${searchParam}`)
    .then((res) => userFound(res))
    .catch(() => userNotFound())
);

export const handleUserFound = (setUserFound, setUserDetails) => (userDetails) => {
  const { data } = userDetails;
  setUserDetails({
    name: data.name,
    bio: data.bio,
    location: data.location,
    avatar: data.avatar_url,
    numberOfPublicRepos: data.public_repos,
    numberOfPublicGists: data.public_gists,
    numberOfFollowers: data.followers,
    numberOfFollowing: data.following,
  });
  setUserFound(true);
};

export const handleUserNotFound = (setUserFound, setUserDetails) => () => {
  setUserDetails({});
  setUserFound(false);
};

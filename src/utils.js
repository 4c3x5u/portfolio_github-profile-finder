import axios from 'axios';

export const searchUser = (searchParam, userFound, userNotFound) => (
  axios
    .get(`https://api.github.com/users/${searchParam}`)
    .then((res) => userFound(res))
    .catch(() => userNotFound())
);

export const handleUserFound = (setUserFound, setUserDetails) => (foundUserDetails) => {
  setUserFound(true);
  setUserDetails(JSON.stringify(foundUserDetails));
};

export const handleUserNotFound = (setUserFound, setUserDetails) => () => {
  setUserFound(false);
  setUserDetails({});
};

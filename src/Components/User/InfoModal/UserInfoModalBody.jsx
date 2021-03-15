import React from 'react';

const UserInfoModalBody = () => (
  <>
    <p className="mb-0">
      Click on
      <em>{' Repos, Gists, Followers, Following, '}</em>
      or
      <em>{' the location '}</em>
      to toggle their corresponding sections.
    </p>
    <br />
    <p className="mb-0">
      You can also click on the section headers and the app footer to trigger their actions.
    </p>
    <br />
    <p className="mb-0">
      The profile section header navigates to the user&apos;s GitHub profile.
    </p>
    <br />
    <p className="mb-0">
      The other section headers navigate to either Repos, Gists, Followers, or the Following page
      for the user on GitHub depending on its title.
    </p>
    <br />
    <p className="mb-0">
      The footer navigates to this project&apos;s GitHub page.
    </p>
  </>
);

export default UserInfoModalBody;

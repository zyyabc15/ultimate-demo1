import * as React from 'react';
import { Link } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
export default () => {
  return (
    <HomeLayout title="Welcome">
      <Link to="user/add">add user</Link>
      <br />
      <Link to="/user/list">user list</Link>
    </HomeLayout>
  );
};
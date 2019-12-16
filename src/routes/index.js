import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Students from '../pages/Students';
import CreateStudent from '../pages/CreateStudent';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/create" component={CreateStudent} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}

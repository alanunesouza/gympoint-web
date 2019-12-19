import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Students from '../pages/Students';
import StudentForm from '../pages/StudentForm';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/student" exact component={StudentForm} isPrivate />
      <Route path="/student/:id" exact component={StudentForm} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}

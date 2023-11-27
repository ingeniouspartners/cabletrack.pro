import React from 'react';
import { Meteor } from 'meteor/meteor';
import UserView from '../components/UserView';

/* Please replace the guts of this page with the right code. */
const ViewUser = (() => <UserView user={Meteor.user} />);

export default ViewUser;

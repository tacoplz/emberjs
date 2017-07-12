import Ember from 'ember';
//^this line gives us access to the actual Ember.js library as the variable Ember
import config from './config/environment';
//^gives us access to our app's configuration data as the variable config.

const Router = Ember.Router.extend({
  //^const is a way to declare a read-only variable to make sure it is not accidentally reassigned elsewhere
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  //^calling this.route('about') in the Router.map function. That new line of code tells the Ember router to run our /app/routes/about.js file when a visitor navigates to /about.
  this.route('contact');
  this.route('rentals');
});

export default Router;
//^makes the Router variable defined in this file available to other parts of the app.

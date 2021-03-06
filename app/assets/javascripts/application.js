//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./views
//= require_tree ./templates
//= require_tree ./routes

window.Contacts = Ember.Application.create({
  ready: function() {
    console.log("Loaded")
  }
});

Contacts.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    namespace: 'api'
  })
});

// Contacts.Store = DS.Store.extend({
//   revision: 11,
//   adapter: DS.FixtureAdapter.create()
// });

Contacts.Router.reopen({
  location: 'history'
});

Contacts.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.resource('contact', {path: '/:contact_id'}, function() {
      this.route('edit');
    });
  });
});

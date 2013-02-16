Contacts.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.replaceWith('contacts');
  }
});

Contacts.ContactIndexController = Ember.ObjectController.extend({
  deleteContact: function() {
    var contact = this.get('content');
    if (confirm("Are you sure?")) {
      contact.deleteRecord();
      contact.store.commit();
      this.target.transitionTo('contacts');
    };
  }
});

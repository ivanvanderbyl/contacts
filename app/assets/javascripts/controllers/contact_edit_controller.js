Contacts.ContactEditController = Ember.ObjectController.extend({
  transaction: null,

  saveChanges: function() {
    var contact = this.get('content'), self = this;

    contact.on('didUpdate', function() {
      self.target.transitionTo('contact', contact);
    })

    contact.store.commit()
  },

  discardChanges: function() {
    var contact = this.get('content'), self = this,
        transaction = this.get('transaction');

    transaction.rollback();
    this.target.transitionTo('contact', contact);
  }
});

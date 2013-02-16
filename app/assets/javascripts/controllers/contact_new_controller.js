Contacts.ContactsNewController = Ember.ObjectController.extend({
  transaction: null,

  saveChanges: function(){
    var contact = this.get('content'),
        transaction = this.get('transaction'),
        self = this;

    contact.on('didCreate', function() {
      Ember.run.schedule('timers', self, function(){
        self.target.transitionTo('contact', contact);
      });
    });

    transaction.commit();
  },

  discardChanges: function(){
    var contact = this.get('content'),
        transaction = this.get('transaction'),
        self = this;

    transaction.rollback();
    contact.deleteRecord();
    this.target.transitionTo('contacts');
  },
});

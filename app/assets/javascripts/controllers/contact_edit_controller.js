Contacts.ContactEditController = Ember.ObjectController.extend({
  transaction: null,

  saveChanges: function(i){
    var model = this.get('content'),
        transaction = this.get('transaction'), self = this;

    model.on('didUpdate', function(model) {
      self.get('target').transitionTo('contact', model);
    });

    transaction.commit();
  },

  discardChanges: function(){
    var model = this.get('content'),
        transaction = this.get('transaction');

    transaction.rollback();
    this.target.transitionTo('contact', model);
  }
});

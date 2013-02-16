Contacts.ContactsRoute = Ember.Route.extend({
  model: function(params) {
    return Contacts.Contact.find();
  },

  renderTemplate: function(controller) {
    this.render('contacts', {
      outlet: 'sidebar',
      controller: controller
    })
  }
});

Contacts.ContactsNewRoute = Ember.Route.extend({
  setupController: function(controller){
    var transaction = this.get('store').transaction();
    // transaction.add(model);
    var model = transaction.createRecord(Contacts.Contact, {});
    controller.set('transaction', transaction);
    controller.set('content', model)
  }
});

Contacts.ContactIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('contact');
  }
});

Contacts.ContactEditRoute = Ember.Route.extend({
  setupController: function(controller, model){
    var transaction = model.store.transaction();
    transaction.add(model);
    controller.set('transaction', transaction);
  },

  model: function() {
    return this.modelFor('contact');
  }
});

Contacts.ContactsRoute = Ember.Route.extend({
  model: function(){
    return Contacts.Contact.find();
  },

  renderTemplate: function(controller){
    this.render('sidebar', {
      outlet: 'sidebar',
      controller: controller
    })
  }
});

Contacts.ContactIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('contact');
  }
});

Contacts.ContactEditRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('contact');
  },

  setupController: function(controller, model){
    var transaction = model.store.transaction();
    transaction.add(model);
    controller.set('transaction', transaction);
  }
});

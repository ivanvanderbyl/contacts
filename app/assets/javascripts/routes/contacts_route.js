Contacts.ContactsRoute = Ember.Route.extend({
  model: function(){
    return Contacts.Contact.find();
  },

  renderTemplate: function(controller){
    this.render('contacts', {
      outlet: 'sidebar',
      controller: controller
    })
  }
});

Contacts.Contact = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phoneNumber: DS.attr('string'),

  fullName: function(){
    var firstName = this.get('firstName'),
        lastName = this.get('lastName');

    return "%@ %@".fmt(firstName, lastName);
  }.property('firstName', "lastName")
});

Contacts.Contact.FIXTURES = [{
  id: 1,
  firstName: "Ivan",
  lastName: 'Vanderbyl',
  email: 'ivan@crashlog.io'
}]

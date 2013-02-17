Contacts.Contact = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phoneNumber: DS.attr('string'),

  fullName: function(){
    var firstName = this.get('firstName'),
        lastName = this.get('lastName');

    if (!firstName) {
      firstName = 'Test'
    };

    if (!lastName) {
      lastName = 'Test'
    };

    return "%@ %@".fmt(firstName, lastName);
  }.property('firstName', "lastName")
});

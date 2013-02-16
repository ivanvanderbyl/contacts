Contacts.SmartTextField = Ember.TextField.extend({
  placeholderCompletion: null,

  placeholder: function() {
    var placeholderCompletion = this.get('placeholderCompletion');

    if(!placeholderCompletion) {
      placeholderCompletion = "user";
    }

    return "%@@example.com".fmt(placeholderCompletion.toLowerCase());
  }.property('placeholderCompletion')
});

Contacts.SmartTextField = Ember.TextField.extend({
  autocomplete: null,

  placeholder: function() {
    var value = this.get('autocomplete');
    value = value.toLowerCase()
    return "%@@example.com".fmt(value);
  }.property('autocomplete')
});

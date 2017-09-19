import Ember from 'ember';

export default Ember.Controller.extend({

  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const name = this.get('emailAddress');

      const newInvitation = this.store.createRecord('contact', { name: name });
      newInvitation.save();

      this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});

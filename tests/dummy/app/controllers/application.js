import Ember from 'ember';

export default Ember.Controller.extend({
  emberGrowlService: Ember.inject.service(),

  init(){
    this.get('emberGrowlService').showNotification('Merhaba');
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  emberGrowlService: Ember.inject.service(),

  init(){
    this.get('emberGrowlService').showNotification({message:'Merhaba -10', timeout:10});
    this.get('emberGrowlService').showNotification({message:'Merhaba -x'});
    this.get('emberGrowlService').showNotification({message:'Merhaba -5', timeout:5});
    this.get('emberGrowlService').showNotification({message:'Merhaba -3', timeout:3});
  }
});

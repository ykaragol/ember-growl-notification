import Ember from 'ember';

export default Ember.Service.extend({
  init(){
    this.set('notifications',new Ember.A());
  },
  showNotification(message){
    this.get('notifications').pushObject({message});
  }
});

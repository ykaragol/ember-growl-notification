import Ember from 'ember';

export default Ember.Service.extend({
  init(){
    this.set('notifications', new Ember.A());
  },
  showNotification(notification){
    this.get('notifications').pushObject(notification);
  },
  removeNotification(notification){
    this.get('notifications').removeObject(notification);
  }
});

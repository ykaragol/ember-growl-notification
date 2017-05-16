import Ember from 'ember';

export default Ember.Component.extend({
  service : Ember.inject.service('ember-growl-service'),

  notifications: Ember.computed.alias('service.notifications'),

  actions:{
    dismissNotification(notification){
      this.get('notifications').removeObject(notification);
    }
  }
});

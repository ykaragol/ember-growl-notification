import Ember from 'ember';
import layout from '../templates/components/ember-growl-notification-placeholder';

export default Ember.Component.extend({
  layout,

  service : Ember.inject.service('ember-growl-service'),
  notifications: Ember.computed.alias('service.notifications'),

  actions:{
    dismissNotification(notification){
      this.get('service').removeNotification(notification);
    }
  }
});

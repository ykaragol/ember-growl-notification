import Ember from 'ember';
import layout from '../templates/components/remaining-time-display';

const DEFAULT_TIMEOUT = 6;

export default Ember.Component.extend({
  layout,
  classNames:['ember-growl-notification-item-time-to-die-container'],

  animationStyle: Ember.computed('timeout',function(){
    let timeout = this.get('timeout') || DEFAULT_TIMEOUT;
    return Ember.String.htmlSafe(`animation-duration: ${timeout}s`);
  }),

  triggerTimedOut(){
    this.get('timedOut')();
  },

  didRender(){
    let timeout = this.get('timeout') || DEFAULT_TIMEOUT;
    Ember.run.later(this, this.triggerTimedOut, timeout);
  }
});

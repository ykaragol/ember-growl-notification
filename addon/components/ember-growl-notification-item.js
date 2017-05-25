import Ember from 'ember';
import layout from '../templates/components/ember-growl-notification-item';

export default Ember.Component.extend({
  layout,
  classNames:['ember-growl-notification-item-container'],
  classNameBindings:['readyToClose:ready-to-close','typeClass'],
  readyToClose:false,

  typeClass:Ember.computed('type',function(){
    let type = this.get('type') || 'success';
    return 'ember-growl-notification-'+type;
  }),

  didRender(){
    let animator = this.element.querySelector(".ember-growl-notification-item-time-to-die");
    animator.addEventListener("animationend", (event)=>{
      if(event.animationName==='getsmaller'){
        this.set('readyToClose', true);
      }
    }, false);

    this.element.addEventListener("animationend", (event)=>{
      if(event.animationName==='readytoclose'){
        this.get('close')();
      }
    }, false);
  },

  actions:{
    close:function(){
      this.get('close')();
    }
  }
});

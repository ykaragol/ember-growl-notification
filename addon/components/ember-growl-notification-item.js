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

  prepareToClose(){
    this.element.addEventListener("animationend", (event)=>{
      if(event.animationName==='readytoclose'){
        this.fireClose();
      }
    }, false);
    this.set('readyToClose', true);    
  },

  fireClose(){
    this.get('close')();
  },

  actions:{
    close:function(){
      this.prepareToClose();
    },
    timedOut:function(){
      this.prepareToClose();
    }
  }
});

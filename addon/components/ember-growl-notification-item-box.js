import Ember from 'ember';
import layout from '../templates/components/ember-growl-notification-item-box';

function animationendHandler(event){
  if(event.animationName==='getsmaller'){
    this.get('close')();
  }
}

export default Ember.Component.extend({
  layout,

  didRender(){
    let animator = this.element.querySelector(".ember-growl-notification-item-box-time-to-die");
    animator.addEventListener("animationend", animationendHandler.bind(this), false);
  },

  actions:{
    close:function(){
      this.get('close')();
    }
  }
});

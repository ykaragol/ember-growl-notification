import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ember-growl-notification-placeholder', 'Integration | Component | ember growl notification placeholder', {
  integration: true
});

test('it renders growl-container', function(assert) {
  this.render(hbs`{{ember-growl-notification-placeholder}}`);

  assert.ok(this.$('#growl-container').length===1, '#growl-container');
});

test('it renders in block form', function(assert) {
  let notification = {'prop':'test'};
  let notificationToRemove = null;
  Ember.getOwner(this).register('service:ember-growl-service', Ember.Service.extend({
    notifications:[notification],
    removeNotification(n){
      notificationToRemove = n;
    }
  }));

  this.render(hbs`
    {{#ember-growl-notification-placeholder as |notification handler|}}
      <button onclick={{action handler}}></button>
      <span id='log'>{{notification.prop}}</span>
    {{/ember-growl-notification-placeholder}}
  `);

  assert.equal(this.$('#growl-container').length, 1, '#growl-container');
  assert.equal(this.$('#log').text(), 'test');

  assert.notOk(notificationToRemove, 'notificationToRemove should be null');
  this.$('button').click();
  assert.ok(notificationToRemove, 'notificationToRemove should be notification');
  assert.equal(notificationToRemove, notification, 'test notificationToRemove');
});

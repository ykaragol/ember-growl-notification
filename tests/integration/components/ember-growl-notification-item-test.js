import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-growl-notification-item', 'Integration | Component | ember growl notification item', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{#ember-growl-notification-item}}<span id='log'>aaa</span>{{/ember-growl-notification-item}}`);

  assert.equal(this.$('#log').text().trim(), 'aaa');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-growl-notification-item-box', 'Integration | Component | ember growl notification item box', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-growl-notification-item-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-growl-notification-item-box}}
      template block text
    {{/ember-growl-notification-item-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

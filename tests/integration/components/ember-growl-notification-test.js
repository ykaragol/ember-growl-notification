import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-growl-notification', 'Integration | Component | ember growl notification', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    <div id='growl-container'></div>
    <div id='original-container'>
      {{#ember-growl-notification}}
        <span id='test-span'></span>
      {{/ember-growl-notification}}
    </div>
  `);

  assert.ok(this.$('#growl-container > #test-span').length>0, 'span in growl-container');
  assert.ok(this.$('#original-container > #test-span').length==0, 'span not in original-container');
});

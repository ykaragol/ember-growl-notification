/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-growl-notification',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/ember-growl-notification.css');
  },

  contentFor(type, config) {
    if (type === 'body-footer') {
      return '<div id="growl-container" class="ember-growl-container"></div>';
    }
  }
};

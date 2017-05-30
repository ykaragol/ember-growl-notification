# ember-growl-notification

Ember-cli addon to create growl like components.

# Simple Usage

Just put `{{ember-growl-notification-placeholder}}` to your `application.hbs`.

And call `ember-growl-service`s `showNotification(notification)` method.

### showNotification parameters:
  - message: string to be displayed
  - type: should either `success`, `error` or `info` to apply corresponding styles. 

# Changing the view of items

With contextual usage of `{{ember-growl-notification-placeholder}}`, you can easily modify the view of the items.

```
{{#ember-growl-notification-placeholder as |notification close|}}
  <div>
    This is it!
    <br>
    {{notification.message}}
    <br>
    <button onclick={{action close}}>Close</button>
  </div>
{{/ember-growl-notification-placeholder}}
```


# In-Place Usage

If you want to create a very customized message in a template. You can use `{{ember-growl-notification}` component. 
 
 ```
   {{#if isShown}}
	   {{#ember-growl-notification}}
	      My funny message!
	   {{/ember-growl-notification}}
	 {{/if}}
 ```

# Defining New Types

Predefined types are: `success`, `info` and `error`. Add relevant styles as following:
 ```
 /* new type: 'warning' */
 .ember-growl-notification-warning {
   border: 1px solid rgb(1, 6, 216);
   box-shadow: 5px 5px 4px #888888;
 
   background-image: linear-gradient(135deg, rgb(218, 220, 255) 0px, rgb(109, 111, 255) 100%);
   opacity: 0.7;
 }
 
 .ember-growl-notification-warning .ember-growl-notification-item-time-to-die {
   background-color: rgb(1, 6, 216);
 }
 
 .ember-growl-notification-warning .ember-growl-notification-item-time-to-die-container{
   background-color: rgba(1, 6, 216, 0.4);
 }
 ```
 

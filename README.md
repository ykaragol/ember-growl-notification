# ember-growl-notification

Ember-cli addon to create growl like components.

## Simple Usage

Just put `{{ember-growl-notification-placeholder}}` to your `application.hbs`.

And call `ember-growl-service`s `showNotification(notification)` method.

[Sample Demo](https://ember-twiddle.com/dd37b092edace8124b0ce2f3489650e6?openFiles=templates.application.hbs%2Ctemplates.components.dummy-component.hbs) from Twiddle

### showNotification parameters:
  - message: string to be displayed
  - type: should be either `success`, `error` or `info` to apply corresponding styles. 

## Changing the view of items

With the contextual usage of `{{ember-growl-notification-placeholder}}`, you can easily modify the view of the items.

```hbs
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


## In-Place Usage

If you want to create a very customized message in a template. You can use `{{ember-growl-notification}}` component. 
 
 ```hbs
   {{#if isShown}}
	   {{#ember-growl-notification}}
	      My funny message!
	   {{/ember-growl-notification}}
	 {{/if}}
 ```

## Defining New Types

Predefined types are: `success`, `info` and `error`. Add relevant styles as following:
 ```css
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
 
## Roadmap to 1.0.0

- [x] Prepare the readme file
- [x] Add meaningful tests
- [x] Setup the CI environment
- [ ] ~~Create a demo app~~
# Angular Drag to Scroll [![Build Status](https://travis-ci.org/jellekralt/angular-drag-scroll.svg?branch=master)](https://travis-ci.org/jellekralt/angular-drag-scroll) [![bitHound Dependencies](https://www.bithound.io/github/jellekralt/angular-drag-scroll/badges/dependencies.svg)](https://www.bithound.io/github/jellekralt/angular-drag-scroll/master/dependencies/npm) [![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jellekralt/angular-drag-scroll/blob/master/LICENSE)
Lightweight drag to scroll directive for AngularJS

![Scroll](https://raw.githubusercontent.com/jellekralt/angular-drag-scroll/master/docs/ng-drag-scroll.gif)

Try it yourself at: http://jellekralt.github.io/angular-drag-scroll/

## Installation
* npm: ```npm install angular-drag-scroll --save```
* Bower: ```bower install angular-drag-scroll --save```
* Download: you can just download the files from [Github](https://github.com/jellekralt/angular-drag-scroll/archive/master.zip)

## Run
* Run demo: ```npm start```

## Test
* Unit tests: ```npm test```
* E2E tests: ```npm test-e2e```

## Usage
* Include ```ng-drag-scroll.js``` in your HTML template:

```html
<script src="angular.js"></script>
<script src="ng-drag-scroll.js"></script>
```

* Add a dependency to the ng-drag-scroll module in your application.

```javascript
angular.module('MyApp', ['ng-drag-scroll']);
```

* Add an attribute to an element with a scrollbar to make the content scrollable. You can use the drag-scroll attribute value to switch the scrolling on/off. The value can be a variable or an expression.

```html
<div drag-scroll="true">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>
</div>
```
## Configure
The following attributes can be used to configure the directive:

### Axis
Use the axis attribute to lock the dragging to a specific axis. By default, both axes are enabled
```html
<!-- Locks the dragging to the X axis -->
<div drag-scroll axis="x">
<!-- Locks the dragging to the Y axis -->
<div drag-scroll axis="y">
```

### Events
Use the on-drag-start and on-drag-end events to call functions whenever the dragging starts or stops
```html
<!-- Calls a function on start and stop -->
<div drag-scroll on-drag-start="handleDragStart()" on-drag-end="handleDragEnd()">
```


## Credits / Inspiration
* https://github.com/asvd/dragscroll

## License
MIT: http://jellekralt.mit-license.org/

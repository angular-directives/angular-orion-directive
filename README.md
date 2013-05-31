# Angular Orion Directive

This directive let you use the Orion editor thanks to an AngularJS directive.

## Requirements
- Orion: http://www.eclipse.org/orion/

Load Orion and this directive with the following code:
```html
<link rel="stylesheet" type="text/css" href="http://eclipse.org/orion/editor/releases/2.0/built-editor.css"/>
```

```html
<script type="text/javascript" src="http://eclipse.org/orion/editor/releases/2.0/built-editor.min.js"></script>
<script type="text/javascript" src="http://eclipse.org/orion/editor/releases/2.0/built-editor.min.js"></script>
```

The latest Orion build can be retrieved on its officiel website:
http://download.eclipse.org/orion/

Add a dependency to the module in your own module.

```js
var myModule = angular.module('MyModule', ['angular.directives-orion'])
```

Use the directive in your HTML files with the following code:

```html
<ang:orion editor-class='classNameWantedForYourEditor' editor-model="nameOfTheAttributeInYour$Scope" />
```

A demonstration is visible in the file index.html.


## Issues
The data binding is currently only setup for the initialization of the editor. It will be fixed later on.

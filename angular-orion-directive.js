'use strict';

angular.module('angular.directives-orion', []).directive('angOrion', [function () {
  var compilationFunction = function (templateElement, templateAttributes, transclude) {
    if (templateElement.length === 1) {
      var domElement = templateElement[0];
      var editorClassName = domElement.getAttribute('editor-class');

      require(["orion/editor/edit"], function(edit) {
        edit({className: editorClassName});
      });

      var orionEditor = document.createElement("pre");
      orionEditor.innerHTML = 'var aVariable = "Hello World!"';

      orionEditor.setAttribute('class', editorClassName);
      orionEditor.setAttribute('data-editor-lang', 'js');
      orionEditor.setAttribute('data-editor-title', 'Eclipse Orion');

      domElement.parentNode.replaceChild(orionEditor, domElement);

    }
    return {
      pre: function preLink(scope, instanceElement, instanceAttributes, controller) {
        var data = scope[domElement.getAttribute('editor-model')];
        instanceElement[0].innerHTML = data;
      },
      post: function postLink(scope, instanceElement, instanceAttributes, controller) {}
    };
  };

  var orion = {
    restrict: 'E',
    compile: compilationFunction,
    replace: true
  };
  return orion;
}]);

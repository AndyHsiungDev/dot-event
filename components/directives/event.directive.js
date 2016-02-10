;(function() {

  'use strict';

  /**
   * Main navigation, just a HTML template
   * @author Jozef Butko
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular
    .module('boilerplate')
    .directive('event', factoryeventRepresentation);

  function factoryeventRepresentation() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/event-representation.html'
    };

    return directiveDefinitionObject;
  }

})();
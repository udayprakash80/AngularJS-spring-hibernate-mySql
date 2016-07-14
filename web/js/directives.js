angular.module('printAdmin.directives', [])
.directive('printadmin', function() {
    return {
      restrict: 'AE',
      replace: 'true',
      template: '<div ng-controller = "AngularAppController" ><div ui-view></div></div>'
    };
})

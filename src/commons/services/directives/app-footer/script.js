app.directive('appFooter', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$rootScope', '$scope', function ($rootScope, $scope) {

    }],
    link: function (scope, element, attrs) {
    },
    templateUrl: 'directive-app-footer',
    replace: true
  };
});

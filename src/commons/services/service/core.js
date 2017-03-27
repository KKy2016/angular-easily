app.run(['$rootScope', '$http', '$routeParams', function ($rootScope, $http, $routeParams) {
  $rootScope.setTitle = function (name) {
    document.title = name + ' --' +
      $rootScope.config.title +
      ($rootScope.config['titleExtra'] || '');
  };


}]);

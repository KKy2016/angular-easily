app.register.controller('homeCtrl', ['$scope', '$rootScope', 'defaultService', function ($scope, $rootScope, defaultService) {
  $rootScope.setTitle('首页');
}]);
app.register.controller('albumCtrl', ['$scope', '$rootScope', 'defaultService', function ($scope, $rootScope, defaultService) {
  $rootScope.setTitle('我的相册');
}]);
app.register.controller('feedbackCtrl', ['$scope', '$rootScope', 'defaultService', function ($scope, $rootScope, defaultService) {
  $scope.form = defaultService.feedback;

  $rootScope.setTitle('意见反馈');
}]);



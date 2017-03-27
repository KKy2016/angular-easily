app.register.controller('blogListCtrl', ['$scope', '$rootScope', 'blogService', '$http', function ($scope, $rootScope, blogService, $http) {
  $scope.dataList = [];
  $rootScope.setTitle('我的博客');
  $http({
    method: 'GET',
    url: '/apis/blog-list-main.json',

  }).then(res => {
    let data = res.data;

    $scope.dataList = data.data;
  });
}]);
app.register.controller('blogDetailCtrl', ['$scope', '$rootScope', 'blogService', '$routeParams', '$location', function ($scope, $rootScope, blogService, $routeParams, $location) {
  $scope.paramId = $routeParams['id'];

  if ($scope.paramId) {
    $rootScope.setTitle('博客' + $scope.paramId);
  }
  else {
    alert('文章参数错误');
    $location.url('/');
  }
}]);

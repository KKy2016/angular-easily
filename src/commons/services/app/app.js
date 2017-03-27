/**
 * 定义一个模块
 */
var app = angular.module('app', ['ngRoute']);
/*最开始执行*/
app.run(['$rootScope', function ($rootScope) {
  console.log('app-run');
  //引入配置
  /*=include ../../../config/index.js */
  $rootScope.config = config;
  //路由事件
  $rootScope.$on('$routeChangeStart', function () {
    console.log('route-start');
  });
  $rootScope.$on('$routeChangeSuccess', function () {
    console.log('route-success');
  });
}]);

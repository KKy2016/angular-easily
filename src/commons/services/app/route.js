app.config(['$routeProvider', '$locationProvider', '$controllerProvider', '$provide', function ($routeProvider, $locationProvider, $controllerProvider, $provide) {
  let firstRun = true,
    ctrls = [];
  //挂载注册器
  app.register = {
    controller: $controllerProvider.register,
    service: $provide.service
  };

  $routeProvider.when('/', {
    redirectTo: '/home'
  }).when('/home', {
    controller: 'homeCtrl',
    reloadOnSearch: true,
    resolve: loadController(['@{rev-pages/default/main.js}', 'css!@{rev-pages/default/main.css}']),
    templateUrl: '@{rev-pages/default/html-home.html}'
  }).when('/album', {
    controller: 'albumCtrl',
    reloadOnSearch: true,
    resolve: loadController(['@{rev-pages/default/main.js}', 'css!@{rev-pages/default/main.css}']),
    templateUrl: '@{rev-pages/default/html-album.html}'
  }).when('/feedback', {
    controller: 'feedbackCtrl',
    reloadOnSearch: true,
    resolve: loadController(['@{rev-pages/default/main.js}', 'css!@{rev-pages/default/main.css}']),
    templateUrl: '@{rev-pages/default/html-feedback.html}'
  }).when('/blog/list', {
    controller: 'blogListCtrl',
    reloadOnSearch: true,
    resolve: loadController(['@{rev-pages/blog/main.js}', 'css!@{rev-pages/blog/main.css}']),
    templateUrl: '@{rev-pages/blog/html-list.html}'
  }).when('/blog/detail', {
    controller: 'blogDetailCtrl',
    reloadOnSearch: true,
    resolve: loadController(['@{rev-pages/blog/main.js}', 'css!@{rev-pages/blog/main.css}']),
    templateUrl: '@{rev-pages/blog/html-detail.html}'
  }).otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
  /**
   * 如果加载过多则reload
   * @param path
   */
  function handleLoadMuch(paths) {
    const MAX_NUM = 20;
    paths.forEach(function (path) {
      if (path.indexOf('css!') === -1 && $.inArray(path, ctrls) < 0) {
        ctrls.push(path);
        if (ctrls.length >= MAX_NUM) {
          location.reload();
        }
      }
    });
  }

  /**
   * 异步加载资源
   * @param path [Array] 加载路径
   */
  function loadController(paths) {
    return {
      'loadController': ['$q', '$http', '$rootScope', function ($q, $http, $rootScope) {
        let defer = $q.defer();
        //判断加载太多则重新加载
        handleLoadMuch(paths);
        require(paths, function () {
          startApply(true);
        });
        function startApply(needApply) {
          defer.resolve();

          if (needApply) {
            $rootScope.$apply();
          }
          if (!firstRun) {
            $(document.body).scrollTop(0);
          }
          firstRun = false;
        }

        return defer.promise;
      }]
    };
  }
}]);

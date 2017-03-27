//http 拦截器
app.factory("httpInterceptor", ["$q", "$rootScope", function ($q, $rootScope) {
  return {
    /***
     * 请求拦截器
     * 可以返回$q.reject('pageExpires');来阻止请求
     */
    request: function (config) {
      //是否是请求api
      config.isApi = config.url && config.url.indexOf('/apis') > -1;

      return config;
    },
    requestError: function (rejectReason) {

    },
    response: function (response) {
      let data,
        config = response.config;

      if (config.isApi) {
        data = response.data;

        if (parseInt(data.status) > 0) {
          alert('请求' + config.url + '失败：' + data.msg);
          return $q.reject(data.msg);
        }
      }
      return response || $q.when(response);
    },
    responseError: function (rejectReason) {
      if (rejectReason === 'pageExpires') {
        alert('页面已过期，正在为您刷新页面');
        location.reload(true);
      }
      return $q.reject(rejectReason);
    }
  };
}]).config(["$httpProvider", function ($httpProvider) {
  $httpProvider.interceptors.push("httpInterceptor");
}]);

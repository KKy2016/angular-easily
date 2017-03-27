/*=include ./development.js */
/*=include ./production.js */

let config = {
  'title': '个人网站',
  'development': developmentConfig,
  'production': productionConfig
};

angular.extend(config, config['@{env}']);

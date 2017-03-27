//配置requirejs
require.config({
  map: {
    '*': {
      'css': './libs/require.css'
    }
  }
});
//services
/*=include ./services/app/app.js */
/*=include ./services/app/route.js */
/*=include ./services/service/core.js */
/*=include ./services/service/http.js */
/*=include ./services/service/libs.js */
/*=include ./services/service/filter.js */
//directives
/*=include ./services/directives/app-header/script.js */
/*=include ./services/directives/app-footer/script.js */
//bootstrap
/*=include ./services/app/bootstrap.js */

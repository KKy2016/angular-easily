# angular-easily
* 该项目仅仅是为了演示angularjs，主旨简单易懂的学习使用angularjs。
* 涉及到directive,controller,service,filter,$http拦截器，异步加载控制器资源等。
* 关于gulp编译见[gulp-easily](https://github.com/yujingwyh/gulp-easily)。

## 使用
* 生产环境可将 nginx 等配置到dist目录并重写路由——非资源映射到index.html

``` bash
$ npm install #插入依赖
$ npm run dev #编译并监视文件改动，同时开启一个web服务器，
$ npm run build #编译文件
```
## 感想
使用angular也是最多的，最初来说确实感觉不错，双向绑定，控制器，服务等，但后期问题也越来越多了。
angular是一个框架，他包含了很多的东西，比如模块什么的，脏检到后期性能问题也慢慢的凸显出来。
他有指令，指令给我的感觉就相当于一个部分，所以也很难去大规模的去运用指令。
如果想搭建一个管理端，并且不需要长期迭代，那他angular就是最好的选择。


## License
[MIT](http://opensource.org/licenses/MIT)

app.register.service('defaultService', ['$rootScope', '$http', function ($rootScope, $http) {
  let feedback = {
    data: {
      contact: '这是默认联系方式',
      content: '这是默认内容'
    },
    submitEvent(evt) {
      let formData = JSON.stringify(this.data);

      alert('提交的内容为：' + formData);

      evt.preventDefault();
      return false;
    }
  };

  return {
    feedback
  }
}]);

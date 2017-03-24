(function () {
  'use strict';

  // Posts controller
  angular
    .module('posts')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'postResolve'];

  function PostsController ($scope, $state, $window, Authentication, post) {
    var vm = this;

    vm.authentication = Authentication;
    vm.post = post;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Post
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.post.$remove($state.go('posts.list'));
      }
    }


    // Save Post
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.postForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.post._id) {
        vm.post.$update(successCallback, errorCallback);
      } else {
        vm.post.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('posts.view', {
          postId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }

    $scope.uploadFiles = function(file, errFiles) {
    $scope.uploadedFile = file;
    $scope.errFile = errFiles && errFiles[0];
    if (file) {
        file.upload = Upload.upload({
            url: '/api/uploads',
            data: {uploadedFile: file}
        });

        file.upload.then(function (response) {
            console.log('File is successfully uploaded to ' + response.data.uploadedURL);
            $scope.articleImageURL = response.data.uploadedURL;
            $timeout(function () {
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            file.progress = Math.min(100, parseInt(100.0 *
                                     evt.loaded / evt.total));
        });
    }
};


// Create new Article
$scope.create = function (isValid) {
  $scope.error = null;

  if (!isValid) {
    $scope.$broadcast('show-errors-check-validity', 'articleForm');

    return false;
  }

  // Create new Article object
  var article = new Articles({
    title: $scope.title,
    content: $scope.content,
    articleImageURL: $scope.articleImageURL
  });

  // Redirect after save
  article.$save(function (response) {
    $location.path('articles/' + response._id);

    // Clear form fields
    $scope.title = '';
    $scope.content = '';
    $scope.articleImageURL = '';
  }, function (errorResponse) {
    $scope.error = errorResponse.data.message;
  });
};

// Update existing Article
$scope.update = function (isValid) {
  $scope.error = null;

  if (!isValid) {
    $scope.$broadcast('show-errors-check-validity', 'articleForm');

    return false;
  }

  var article = $scope.article;
  article.articleImageURL = $scope.articleImageURL;

  article.$update(function () {
    $location.path('articles/' + article._id);
  }, function (errorResponse) {
    $scope.error = errorResponse.data.message;
  });
};
  }
}());

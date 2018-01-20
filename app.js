var app = angular.module('flapperNews', []);
app.factory('posts', [function(){
  var o = {
    posts: [
      'Monday',
    'Tyesday',
    'Wednesday',
    'Thursday', 
    'Saturday',
    'Sunday'
    ]    
  };
  return o;v
}]);
app.factory('newposts', [function(){
  var o = {
      
  };
  return o;
}]);
app.controller('MainCtrl', [
'$scope',
'posts',
'newposts',
function($scope,posts,newposts){
  $scope.test = 'Hello Waseem Feroz!';
  $scope.test = $scope.test + ' --  How r u?';
  $scope.posts = posts.posts;
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
  $scope.newposts =  [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ]
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.newposts.push({title: $scope.title, upvotes: $scope.upvotes, link: $scope.link});
    $scope.title = '';
    $scope.link = '';
  };
}]);
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      });
  
    $urlRouterProvider.otherwise('home');
  }]);

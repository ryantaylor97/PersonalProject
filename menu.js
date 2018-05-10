//for admin to update customer web page
var total=0
var app=angular.module("menuApp",[]);
app.controller('menuCtrl', function($scope,$http){ 
    $http({
      method: 'GET',
      url: '/menu'
    }).then(function successCallback(response) {
    $scope.menu=response.data;
  }, function errorCallback(response) {
    $scope.menu=[]
  });
$scope.msg="Customers"

//second: update customers
$scope.updateMenu=function(item){
    $http({
      method: 'POST',
      url: '/updateMenu',
      data:item
    }).then(function successCallback(response) {
    $scope.msg="Updated!";
  }, function errorCallback(response) {
    $scope.msg="Server Problem, try again later"
  });
}
//Delete customers
$scope.deleteMenu=function(item){
    $http({
      method: 'POST',
      url: '/deleteMenu',
      data:item
    }).then(function successCallback(response) {
    $scope.msg="Deleted!";
  }, function errorCallback(response) {
    $scope.msg="Server Problem, try again later"
  });
}
 })
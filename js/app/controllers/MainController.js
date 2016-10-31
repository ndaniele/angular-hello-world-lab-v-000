function MainController($scope) {
  $scope.name = 'Nicholas';
  $scope.email = 'n.daniele@gmail.com';
  $scope.phone = 555555555;
  $scope.dog = 'LadyDog!!';
}

angular
  .module('app')
  .controller('MainController', MainController);

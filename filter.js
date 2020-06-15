var app = angular.module('testApp',[]);

app.controller('ListControler', function($scope){
    $scope.notebooks = [
      {"name": "Obi-Wan Kenobi"},
      {"name": "Yoda"},
      {"name": "Lando"},
      {"name": "Han Solo"},
      {"name": "Darth Vader"},
      {"name": "Jar-Jar Binks"},
      {"name": "Mace Windu"},
      {"name": "Chewy"}
    ];
    $scope.orderList = "name";
  });

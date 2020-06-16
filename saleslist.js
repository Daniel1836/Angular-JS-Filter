(function(){
  // Declare App
  var app = angular.module('testApp',[]);
  
  // Create Controller
  app.controller('testController', function($scope){
    
    // Data  
    $scope.title = "Sale List";
    $scope.products = [
      {
        name: 'Product One',
        price: 2,
     
      },
      {
        name: 'Product Three',
        price: 5,
     
      },
      {
        name: 'Product Two',
        price: 9,
        
      }
    ];
    
    // Add Product Functionality    
    $scope.addProduct = function(){    
      $scope.products.push($scope.newProduct);
      $scope.newProduct = {};
    };
    
  // End Controller  
  });
  
// End App  
})();
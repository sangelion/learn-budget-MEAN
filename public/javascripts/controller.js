var app = angular.module('budgetApp',["ngRoute"]);

app.controller('budgetlistController', function($scope, $http) {
    console.log("Hello controller");
app.config(function($routeProvider) {
    $routeProvider.when("/billbudget", {
       templateUrl: "/views/billbudget.ejs"  
    });
});

  $scope.billlist = [
  {
      date: "16/1/2016",
      item: "Susu",
      qty: "6",
      price: "137.40",
      category: "Family",
      shopstore: "Aeon Bic",
      financetype: "expense"
  },
  {

      date: "16/1/2016",
      item: "Aiskrim",
      qty: "2",
      price: "12.00",
      category: "Outing",
      shopstore: "Aeon Bic",
      financetype: "expense"
  }
];

});

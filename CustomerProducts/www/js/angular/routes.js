customerProducs.config(['$routeProvider', '$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      }).
      when('/orders', {
        templateUrl: 'views/orders.html',
        controller:'ordersCtrl'
      }).
    when('/orderdetails/:id', {
        templateUrl: 'views/orderdetails.html',
        controller:'ordersCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
         //$locationProvider.html5Mode( true );
  }]);
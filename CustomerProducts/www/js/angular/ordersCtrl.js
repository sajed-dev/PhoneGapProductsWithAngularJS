customerProducs.controller('ordersCtrl', function($scope,Page,ordersService,$routeParams, $route,$timeout){
    var id = $routeParams.id;
    if(id){
        Page.setTitle('Orders Item #'+id);
        ordersService.getItem(id,function(data){
        if(data){
            if(data.categoryPath){
                $scope.breadCrumbs = data.categoryPath.split('/');
            }
            $scope.product = data;
        }
    });
    }else{
        Page.setTitle('Orders List');
  $scope.products = [];
    
    
    $scope.submit = function(){
        ordersService.getOrderList($scope.catID,$scope.keyword,function(data){
        if(data && data.items && data.items.length){
            $scope.products = data.items;
        }
    });
    };
        
    }
    
    
    $scope.openExternalURL = function(){
        window.open(this.product.productUrl, '_system')        
    };
    
    $scope.readBarcode = function(){
        cordova.plugins.barcodeScanner.scan(
      function (result) {
          if(result.text){
              var splitter = result.text.split('-');
              $timeout(function(){
                  $scope.catID = splitter[0];
              $scope.keyword = splitter[1];
              $scope.submit();
              });
              
          }
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
    };
  
});


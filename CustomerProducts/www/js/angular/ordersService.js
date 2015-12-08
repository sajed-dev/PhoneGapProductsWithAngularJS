customerProducs.service('ordersService', function($http){

   this.getOrderList = function (catID,keyword,callback) {
       if(!keyword){
            if(callback){
                callback(false);
            }
           return false;
       }
       
        var success= function(data){
            if(callback){
                callback(data);
            }
            
        };
       var params ={
                format:FORMAT,
                apiKey:APIKEY,
                query:keyword
            };
       if(catID){
           params.categoryId =catID;
       }
        var failed = function(){};
        var request = {
            method:'GET',
            url:SERVICEURL + "v1/search",
            params:params
        };
        $http(request).success(success).error(failed);
        
        
    }
   
   this.getItem = function (itemID,callback) {
       
        var success= function(data){
            if(callback){
                callback(data);
            }
            
        };
        var failed = function(){};
        var request = {
            method:'GET',
            url:SERVICEURL + "v1/items/" + itemID,
            params:{
                format:FORMAT,
                apiKey:APIKEY
            }
        };
        $http(request).success(success).error(failed);
        
        
    }
    
});


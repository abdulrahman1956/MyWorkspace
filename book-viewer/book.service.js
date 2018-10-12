(function(){

    angular.module('bookViewer').factory('bookService', function($http){

        var ctrl = this;

        ctrl.getBookList = function(){
           return $http.get('/books.json').then(function(response){
            return response.data;
              });     
        }

        return this;
    });
})();
(function(){
    var appModule = angular.module('bookViewer', ['ui.router','ui.bootstrap']);

    appModule.config(function($stateProvider){

      var states = [
        {
          name:'home',
          url: '/',
          template: '<full-viewer></full-viewer>'
        }, 
        {
          name:'home2',
          url: '',
          template: '<full-viewer></full-viewer>'
        },
        {
          name:'book',
          url: '/book',
          resolve: {
            bookList: function ($stateParams) {
                return $stateParams.booklist;
            }
          },
          template: '<book book-list ="$resolve.booklist"></book>'
         
        },
        {
          name:'author',
          url: '/author',
          template: '<author></author>'
        },
        {
          name:'year',
          url: '/year',
          template: '<year></year>'
        }
      ];

      states.forEach(function(state){
        $stateProvider.state(state);
      });
   });

   appModule.filter('startFrom', function(){
    return function(data, start){
      if(!data){
        return;
      }else{
        return data.slice(start);
      }
      
    }
 });
})();
  

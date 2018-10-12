
(function () {
    'use strict';

    var app = angular.module('bookViewer');
    app.component('bookViewer', {

        bindings:{
          book: '<'
        },      
        templateUrl: 'book-viewer/book-viewer.component.html',
        controller: getBooks
    });

   function getBooks(bookService){
      var ctrl = this;

      ctrl.books = null;
      ctrl.$onInit = function(){
        bookService.getBookList().then(function(books){
          ctrl.books = books;
        });
      }

      ctrl.DeleteItem = function(book) {
      
        var i = ctrl.books.indexOf(book);
        ctrl.books.splice(i, 1);
      };

      ctrl.modify = function(){
        debugger
        ctrl.modifyField = true;
				ctrl.viewField = true;
			};


			ctrl.update = function(){
				ctrl.modifyField = false;
        ctrl.viewField = false;
			};
    }

})();

(function () {
    'use strict';

    angular.module('bookViewer').component('book', {
    
      bindings:{
        booklist: '<'
      },
        templateUrl: 'book-viewer//book/book.component.html',
        controller: getBooks
    });

   function getBooks(bookService){
    var ctrl = this;
    ctrl.pageSize = 5;
    ctrl.currentPage= 1;
    ctrl.books=null;

    ctrl.$onInit = function () { 
      bookService.getBookList().then(function(books){
        ctrl.books = books;
      });
  }
       
    ctrl.DeleteItem = function(book) {
        
      var i = ctrl.books.indexOf(book);
      ctrl.books.splice(i, 1);
    }
      ctrl.addItem = function() {
        var item = {
          'title' : ctrl.enteredItem
        }
        ctrl.books.push(item);
        //ctrl.item = '';
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

app.controller('listsCtrl', function (listFactory) {
    this.lists = listFactory.getLists();

    this.newList = function(){
        if (this.newListName) {
            listFactory.addList(this.newListName);
            this.newListName = '';
        }        
    };
});
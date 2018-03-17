app.controller('listsCtrl', function (listFactory) {
    this.lists = listFactory.getLists();

    this.newList = function(){
        listFactory.addList(this.newListName);
        this.newListName = '';
    };
});
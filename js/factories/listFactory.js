app.factory('listFactory', function () {
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'New'
        },
        {
            id: 2,
            listName: 'In progress'
        },
        {
            id: 3,
            listName: 'Resolved'
        }
    ];

    service.getLists = function () {
        return lists;
    };

    service.addList = function (name) {
        lists.push({
            id: _.uniqueId('list_'),
            listName: name
        });

    };

    service.removeList = function (list) {
        _.pull(lists, list);
    };

    return service;
});
app.factory('cardFactory', function () {
    var service = {};

    var cards = [
        {
            id: 1,
            description: 'Fix bug in player',
            list_id: 1
        },
        {
            id: 2,
            description: 'Add feature with D3',
            list_id: 2
        },
        {
            id: 3,
            description: 'Learn AngularJS',
            list_id: 2
        }
    ];

    service.getCards = function (list) {
        return _.filter(cards, { list_id: list.id });
    };

    service.addCards = function (list, name) {
        cards.push({
            id: _.uniqueId('card_'),
            description: name,
            list_id: list.id
        });
    };

    service.removeCard = function(card) {
        _.pull(cards, card);
    };

    service.submitCard = function(updatingCard) {
        var card = _.find(cards, {id : updatingCard.id});
        card.description = updatingCard.description;
        card.list_id = updatingCard.list_id;
    };

    return service;
});
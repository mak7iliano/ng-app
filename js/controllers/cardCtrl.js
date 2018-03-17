app.controller('cardCtrl', function (cardFactory){
    this.editting = false;
    this.editingCard = null;

    this.removeCard = function (card) {
        cardFactory.removeCard(card);
    };

    this.editCard = function (card) {
        this.editting = !this.editting;
        this.editingCard = angular.copy(card);
    };

    this.submitCard = function () {
        cardFactory.submitCard(this.editingCard);
        this.editting = false;
        this.editingCard = null;
    }
});
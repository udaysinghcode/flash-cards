app.factory('FlashCardsFactory', function ($http) {
    return { 
        getFlashCards: function(category) {
            var parameters = {};

            if (category) {
                parameters.category = category;
            } 

            return $http.get('/cards', {
                params: parameters
            }).then(function(response) { 
                return response.data;
            });
        }

    }
});
app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.loaded = false;

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	FlashCardsFactory.getFlashCards().then(function (data) {
		$scope.loaded = true;
		$scope.flashCards = data;
	})

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
		}
	}

	$scope.getCategoryCards = function(category) {
		$scope.currentCategory = category;
		$scope.loaded = false;
		FlashCardsFactory.getFlashCards(category).then(function(data) {
			$scope.loaded = true;
			$scope.flashCards = data;
			console.log(data);
		})
	}
});
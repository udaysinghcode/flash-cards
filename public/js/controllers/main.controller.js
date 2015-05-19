app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	FlashCardsFactory.getFlashCards().then(function (data) {
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
		FlashCardsFactory.getFlashCards(category).then(function(data) {
			$scope.flashCards = data;
			console.log(data);
		})
	}
});
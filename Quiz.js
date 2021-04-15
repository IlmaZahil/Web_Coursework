/*----W1790405  Fathima Ilma Zahil  20191153----*/

(function(){
  function report(){
    const outcome = [];
    questionlist.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        outcome.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizin.innerHTML = outcome.join('');
  }
	var seconds = 120 * 1;
	var c_minutes = parseInt(seconds / 60);
	var c_seconds = parseInt(seconds % 60);
	var timer;

	function CheckTime() {
	  document.getElementById("time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

	  if (seconds <= 0) {
		score();
	  } else {
		seconds = seconds - 1;
		c_minutes = parseInt(seconds / 60);
		c_seconds = parseInt(seconds % 60);
		timer = setTimeout(CheckTime, 1000);
	  }
	}
	timer = setTimeout(CheckTime, 1000);
	
	
  function results(){
	clearInterval(timer);
    const answerContainers = quizin.querySelectorAll('.answers');
    var marks = 0;
	var tot = 20;
    questionlist.forEach( (currentQuestion, questionNumber) => {
		
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
			marks=marks + 2 ,"correct";
			
		  }
		else{
			marks=marks-1;
			answerContainer.innerHTML = 'Incorrect! the correct answer is : '+ currentQuestion.correctAnswer ;
		  }
    });
	
	 
    resultsContainer.innerHTML = `${marks} out of ${tot}` + "<br> and you have completed in " + (119 - Math.floor(seconds)) + " seconds" ;
	
	var q = document.getElementById("color");
		if (marks >= 15) {
		color.style.backgroundColor = "lightgreen";
	  } else if (marks >= 10){
		color.style.backgroundColor = "lightblue";
	  } else if (marks >= 5){
		color.style.backgroundColor = "amber";
	  } else{
		color.style.backgroundColor = "red";
	  }
  }


  const quizin = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const questionlist = [
    {
      question: "01) What is the name of the beach that located towards the southern end of the south? ",
      answers: {
        A: "Uppuveli Beach",
        B: "Dutch Bay",
        C: "Benthota",
        D: "Arugam Bay",
      },
      correctAnswer: "D"
    },
    {
      question: "02) In which province Benthota beach located? ",
      answers: {
        A: "Western Province",
        B: "Southern Province",
        C: "Central Province",
        D: "Eastern Province",
      },
      correctAnswer: "B"
    },
    {
      question: "03) What is the fortress built by King Kashyapa?",
      answers: {
        A: "Galle Fort",
        B: "Sigiriya",
        C: "Trincomalee Fort",
        D: "Fort Frederick",
      },
      correctAnswer: "B"
    },
		{
      question: "04) What is the fortress built by the Dutch?",
      answers: {
        A: "Sigiriya",
        B: "Trincomalee Fort",
        C: "Jaffna Fort",
        D: "Galle Fort",
      },
      correctAnswer: "D"
    },
	{
      question: "05) What is the Museum established in 1984?",
      answers: {
        A: "Isurumuniya Museum",
        B: "National Museum of Galle",
        C: "National Museum of Colombo",
        D: "Jaffna Museum",
      },
      correctAnswer: "A"
    },
	{
      question: "06) What is the Museum established in 1877?",
      answers: {
        A: "National Museum of Colombo",
        B: "National Museum of Galle",
        C: "Jaffna Museum",
        D: "Isurumuniya Museum",
      },
      correctAnswer: "A"
    },
	
	{
      question: "07) Which National Park lies on the boundary of Sabaragamuwa and Uva Provinces?",
      answers: {
        A: "Wilpattu National Park",
        B: "Yala National Park",
        C: "Udawalawe National Park",
        D: "Ridiyagama Safari Park",
      },
      correctAnswer: "C"
    },
	{
      question: "08) What is the most famous of Sri Lanka’s 22 national parks?",
      answers: {
        A: "Yala National Park",
        B: "Udawalawe National Park",
        C: "Ridiyagama Safari Park",
        D: "Wilpattu National Park",
      },
      correctAnswer: "A"
    },
	{
      question: "09) In which district the picturesque Dambulla Cave Temple located?",
      answers: {
        A: "Hambantota",        
		B: "Jaffna",
        C: "Anuradhapura",
        D: "Matale",
      },
      correctAnswer: "B"
    },
	{
      question: "10) In which century Temple of the Sacred Tooth Relic established?",
      answers: {
        A: "15th century",
        B: "16th century",
        C: "17th century",
        D: "14th century",
      },
      correctAnswer: "B"
    },
  ];
  report();
  submitButton.addEventListener('click', results);
})();

	









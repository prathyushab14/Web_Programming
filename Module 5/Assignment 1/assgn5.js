var quiz = {
	"questions": [{
			"question": "Who is the captain of Indian cricket team?",
			"option": [{
					"text": "M.S Dhoni",
					"isCorrect": false,
					"feedback": "Incorrect option"
				},
				{
					"text": "Virat Kohli",
					"isCorrect": true,
					"feedback": "Correct option"
				}
			],
			"hint": "Aggressive Player"
		},
		{
			"question": "Who is the captain of India's woman cricket team?",
			"option": [{
					"text": "Mithali Raj",
					"isCorrect": true,
					"feedback": "Correct option"
				},
				{
					"text": "Jhulan Goswami",
					"isCorrect": false,
					"feedback": "Incorrect option"
				}
			],
			"hint": "She is not a bowler"
		}
	]
}
var i = 0
var j = 0
window.onload= function disp(){
	document.getElementById("q1").innerHTML=quiz.questions[i].question
	document.getElementById("hint 1").innerHTML=quiz.questions[i].hint
	document.getElementById("buttonrad1").innerHTML = '<input type = "radio" name = "question1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "question1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	document.getElementById("q2").innerHTML = quiz.questions[i+1].question
	document.getElementById("hint 2").innerHTML = quiz.questions[i+1].hint
	document.getElementById("buttonrad2").innerHTML = '<input type="radio" name="answer" value="choice 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "answer" value = "choice 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
};
function radioclicked(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('fb1').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('fb1').innerHTML = code
	}
}
function radioclicked1(i,j) {
    if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('fb2').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('fb2').innerHTML = code
	}	
}
function submitAns() {
	var total = 4;
	var score = 0;
	
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;	
	var q4 = document.forms["quizForm"]["q4"].value;


	if(q1 == null || q1 == ''){
		alert('You missed question 1');
		return false;
	}
	if(q2 == null || q2 == ''){
		alert('You missed question 2');
		return false;
	}
	if(q3 == null || q3 == ''){
		alert('You missed question 3');
		return false;
	}
	if(q4 == null || q4 == ''){
		alert('You missed question 4');
		return false;
	}
	
	var ans = ["c","d","c","c"]
	if(q1 == ans[0]){
		score ++; 
	}
	if(q2 == ans[1]){
		score ++; 
	}
	if(q3 == ans[2]){
		score ++; 
	}
	if(q4 == ans[3]){
		score++;
	}
	alert('You scored '+ score +' out of '+ total);
}

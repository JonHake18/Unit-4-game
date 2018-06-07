$(document).ready(function(){
	var Random=Math.floor(Math.random()*101+19)
	$("#target").text(Random);

	var num1=Math.floor(Math.random()*11+1)
	var num2=Math.floor(Math.random()*11+1)
	var num3=Math.floor(Math.random()*11+1)
	var num4=Math.floor(Math.random()*11+1)

	var userScore=0;
	var wins=0;
	var losses=0;

	$("#Wins").text(wins);
	$("#Losses").text(losses);

	$("#red").on("click", function(){
		userScore=userScore + num1;
		console.log("New userScore=" + userScore);
		$("#score").text(userScore);
			if(userScore === Random){
				victory();
			}
			else if(userScore > Random){
				defeat();
			}
	})

	$("#blue").on("click", function(){
		userScore=userScore + num2;
		console.log("New userScore=" + userScore);
		$("#score").text(userScore);
			if(userScore === Random){
				victory();
			}
			else if(userScore > Random){
				defeat();
			}
	})

	$("#yellow").on("click", function(){
		userScore=userScore + num3;
		console.log("New userScore=" + userScore);
		$("#score").text(userScore);
			if(userScore === Random){
				victory();
			}
			else if(userScore > Random){
				defeat();
			}
	})

	$("#green").on("click", function(){
		userScore=userScore + num4;
		console.log("New userScore=" + userScore);
		$("#score").text(userScore);
			if(userScore === Random){
				victory();
			}
			else if(userScore > Random){
				defeat();
			}
	})

	function victory(){
		alert("Guess you won, bet you can't do it again.");
	 	wins++; 
	  	$("#Wins").text(wins);
	  	reset();
	}

	function defeat(){
		alert("Really? Try again dude.");
		losses++;
		$("#Losses").text(losses);
		reset();
	}

	function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$("#target").text(Random);
		num1=Math.floor(Math.random()*11+1);
		num2=Math.floor(Math.random()*11+1);
		num3=Math.floor(Math.random()*11+1);
		num4=Math.floor(Math.random()*11+1);
		userScore=0;
		$("#score").text(userScore);
	}

});
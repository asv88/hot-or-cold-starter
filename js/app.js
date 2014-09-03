$(document).ready(function(){
	
	$(".game").submit(function (e) {
		e.preventDefault();
		//prevents default re-load on submit button
	});
	
	//refreshes game on document reload
	$( "a.new" ).click(function() {
         document.location.reload();
		 //reloads page when New Game anchor is clicked
	});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	//create random number function between a max and min argument
	function getRandomArbitrary(min, max) {
  		return Math.ceil(Math.random() * (max - min) + min);
		//Math.ceil rounds decimal numbers within the random function
		//Math.random generates random number with max/min parameters
		//max is exclusive
		//min is inclusive
		   	}
	
		var ranNum = getRandomArbitrary(1, 101);	
		//var ranNum hold random number function
		//limited between 1 and 100
		
		console.log(ranNum);
		
		
	$(".button").click(function() {
	  
		//in input field on click (.button) this function runs
		var guess = $(".text").val();
		//variable to capture value of user's input
		$(".text").val(" ");
		var num = Number(guess);
		//changes the value of the user's input to a number using the Number() function
		console.log(guess, num);
		if(num % 1!== 0) {
	   			alert("Only whole numbers, please!");
				//filters decimal numbers
		}
		else if(num >=101) {
				alert("Only numbers between 1 & 100!");
			    //filters large numbers
		}
		else if(num == "") {
				alert("Please enter a number!");
				//filters empty numbers
		}
		else if (101 > Math.abs(ranNum - num) && 21 < Math.abs(ranNum - num)) {
			$("#feedback").text("You're cold!");
			//prints feedback to screen when guess is within 50
		

			
			//show specific number inputed as a guess
			$("<li>" + num + "</li>").appendTo("#guessList");
		}
		else if (20 >= Math.abs(ranNum - num) && 10 < Math.abs(ranNum - num)) {
			$("#feedback").text("You're warm!");
			//prints feedback to screen when guess is within 20
			
			//show specific number inputed as a guess
			$("<li>" + num + "</li>").appendTo("#guessList");
			
		}
		else if(10 >= Math.abs(ranNum - num) && 1 <= Math.abs(ranNum - num)) {
			$("#feedback").text("You're hot!");
			//prints feedback to screen when guess is within 10
				
			//show specific number inputed as a guess
			$("<li>" + num + "</li>").appendTo("#guessList");
		}
		else if(num == ranNum) {
			$("#feedback").text("You're correct!");
			//prints feedback to screen when guess is within 10
					
			//show specific number inputed as a guess
			$("<li>" + num + "</li>").appendTo("#guessList");
		}
				//show user's amount of guesses
		var a = $("#guessList > li").length;
		//counts the number of direct child li's in ul.guessList
		//everytime the submit button is clicked
			$("#count").text(a);
			//places number of li's into the #count's text
			console.log(a);
			
	});
	
});
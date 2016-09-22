// swap the bg image
var s = "";

function jsonFlickrApi(rsp) {
      window.rsp = rsp;

      i = [Math.floor(Math.random() * rsp.photos.photo.length-1)];

      photo = rsp.photos.photo[i];

      document.body.style.backgroundImage = "url(http://farm" + photo.farm + ".static.flickr.com/" +
      photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg)";

      document.querySelector("#source").innerHTML = photo.title;

      p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;

      var Element = document.getElementById('link');
      Element.setAttribute('href', p_url);

  }


  // show the current time
  var currentTime = new Date()
  	var hours = currentTime.getHours()
  	var minutes = currentTime.getMinutes()

  	if (minutes < 10) {
  		minutes = "0" + minutes;
  	}

    $("#time").html(hours + ":" + minutes);


  	// change the greeting
  	if (hours < 12){
  		$(".greeting").html("Good morning");
  	} else if (hours > 12 && hours < 17 ) {
  		$(".greeting").html("Good afternoon");
  	} else {
  		$(".greeting").html("Good evening");
  	}


  // swap the bg image - from v1
  // var bg = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  // var bgChoice = bg[Math.floor(Math.random() * bg.length)];
  // document.body.style.backgroundImage = "url(images/" + bgChoice + ".jpg)";

  // fade-in elements
  $("#time, .greeting, #start").hide().fadeIn(1000);






  // countdown timer codepen

  "use strict";

  var bigTime = 1499; // time in seconds
  var mode = "normal";


  var mins;
  var secs;

  var countdownID;

  // get all the elements
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var message = document.getElementById("message");

  var test = document.getElementById("test");

  // register the buttons
  var start = document.getElementById("start");
  start.addEventListener("click", startTimer, false);

  var stop = document.getElementById("stop");
  stop.addEventListener("click", stopTimer, false);

  var reset = document.getElementById("reset");
  reset.addEventListener("click", resetTimer, false);

  // COUNTER ========================================================
  function counter() {

    // calculate the minutes and seconds from bigTime
    mins = Math.floor(bigTime/60);
    secs = bigTime - mins * 60;

    // change the HTML to show new minutes and seconds
    minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
    seconds.innerHTML = (secs < 10 ? '0' : '') + secs;


    // switch modes if timer ends
    if (bigTime == 0) {

      if (mode == "normal") {

        // cooldown is 5min
        mode = "cooldown";
        bigTime = 300;

      } else if (mode == "cooldown") {

        // switch back to normal 25min mode
        mode = "normal";
        bigTime = 1499;

        minutes.innerHTML = "25";
        seconds.innerHTML = "00";


        // show start button
        start.style.display = "block";
        stop.style.display = "none";
        reset.style.display = "none";

        // stop timer
        clearInterval(countdownID);
      }

    } else {
      // decrement
      bigTime = bigTime - 1;
    }

  }

  // ACTIONS =======================================================

  // start timer
  function startTimer() {
    // start timer
    countdownID = setInterval("counter()", 1000);


    // show stop button
    start.style.display = "none";
    stop.style.display = "block";
    reset.style.display = "none";
  }

  // stop timer
  function stopTimer() {


    // stop timer
    clearInterval(countdownID);

    // show reset button
    start.style.display = "none";
    stop.style.display = "none";
    reset.style.display = "block";
  }

  // reset timer
  function resetTimer() {
    // reset big time
    bigTime = 1499;

  	minutes.innerHTML = "25";
  	seconds.innerHTML = "00";


    // show start button
    start.style.display = "block";
    stop.style.display = "none";
    reset.style.display = "none";
  }


  // hide the time

  $("#start").click(function(){
  	$("#timer").removeClass("hide");
  	$("#time").html( "");

  });

  // change the quote

  var data = $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function() {
   quotation = data.responseJSON.quoteText;
   author = data.responseJSON.quoteAuthor;
   $("#quote").html("\"" + quotation + "\"");
   $("#author").html(" - " + author);
});

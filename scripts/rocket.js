var timer = null;
var countdownNumber = 10;



var changeStage = function (stage) {
    document.body.className = "body-stage"+stage;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById("countdown").innerText = countdownNumber;
    
    if (stage == 2) {
        timer = setInterval(() => {
            countdownNumber = countdownNumber - 1;
            document.getElementById("countdown").innerText = countdownNumber;
            if (countdownNumber <= 0) {
                changeStage(3);
            };
        }, 200);
    } else if (stage == 3) {
        var success = setTimeout(() => {
            var randomNumber = Math.round(Math.random()*10);
            console.log("randomNumber: "+randomNumber)
            
            if (randomNumber >= 5) {
                changeStage(4); //success
            } else {
                changeStage(5); //failure
            };

        }, 1000);
    };
};
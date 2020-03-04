// init
$(".questionnaire").hide();
$(".ending").hide();
$(".loading").hide();
$(".leaderboard-games").hide();
$(".save").hide();

questions = [
    ["What is the highest grossing franchise", 
        "Pokémon", 
        "Mario", 
        "Call of Duty", 
        "FIFA", 
        1],
    ["What is the best selling game to date", 
        "Grand Theft Auto V", 
        "Wii Sports", 
        "Minecraft", 
        "Tetris", 
        3],
    ["What year was GTA V released", 
        "2012",
        "2013", 
        "2014", 
        "2015", 
        2],
    ["What is the highest selling video game console of all time", 
        "Wii", 
        "DS lite", 
        "XBOX 360", 
        "PS2", 
        4],
    ["Who is the most recognisable character within video games", 
        "Mario", 
        "Sonic", 
        "Link", 
        "Pikachu", 
        1],
    ["Pokémon was originally released on which videogame console",
        "Gameboy",
        "DS",
        "NES",
        "Gamecube",
        1],
    ["What is the name of the final course in all Mario Kart videogames",
        "Ghost Valley",
        "Bowsers Castle",
        "Rainbow Road",
        "Tick-Tock Clock",
        3],
    ["What is the highest-grossing arcade game of all-time",
        "Donkey Kong",
        "Mortal Kombat",
        "Street Figher",
        "Pac-Man",
        4],
    ["What color do the ghost enemies turn to once Pac-Man eats a Power Pellet",
        "Grey",
        "Blue",
        "Orange",
        "White",
        2],
    ["What is the object that opposing players must destroy in order to win at League of Legends",
        "Castle",
        "Base",
        "Nexus",
        "Headquarters",
        3],
    ["What game was the most expensive to develop",
        "Grand Theft Auto V",
        "Destiny",
        "Red Dead Redemption 2",
        "Star Wars: Old Republic",
        1]
    
];
progress = 1;
complete = [];
answers = [];
score=0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

function nextQuestion() {
    if (progress < 10) { // change to 10 once 30 questions is present
        progress += 1;

        duplicate = true;
        while (duplicate == true) {
            random = Math.floor(Math.random() * questions.length);
            duplicate = false;
            for (i=0;i<complete.length;i++) {
                if (complete[i] == random) {
                    duplicate = true;
                }
            }
        }
        $(".title").html("Question " + progress);
        $(".question").html(questions[random][0]);
        $($(".answer")[0]).html(questions[random][1]);
        $($(".answer")[1]).html(questions[random][2]);
        $($(".answer")[2]).html(questions[random][3]);
        $($(".answer")[3]).html(questions[random][4]);
        complete.push(random); 
    } else {
        $(".questionnaire").hide();
        $(".ending").show();
        $(".save").show();
        $(".genres").hide();
        $(".save-genre-title").html("Video Games");
        $(".save-score").html(score + "/10");
        $(".save-name").html($("#name").val());
        answers.push(score);
        console.log(answers);
    }   


}
function chosen(answer) {
    if (questions[random][5] == answer) {
        answers.push([parseInt(random),1]);
        score++;
        colour = "green";
    } else {   
        answers.push([parseInt(random),0]);
        colour = "red"
    };
    $(".loading").show();
    $(".questionnaire").hide();
    $("body").css("background-color", colour);
    setTimeout(function(){
        $("body").css("background-color", "white");
        $(".loading").hide();
        $(".questionnaire").show();
        nextQuestion();
    }, 500);
}

$(".start-button").click(function() {
    $(".start-page").hide();
    $(".loading").show();
    $("body").css("background-color", "black");
    setTimeout(function(){
        $("body").css("background-color", "white");
        $(".questionnaire").show();
        $(".loading").hide();
        
        random = Math.floor(Math.random() * questions.length);
        $(".title").html("Question " + progress);
        $(".question").html(questions[random][0]);
        $($(".answer")[0]).html(questions[random][1]);
        $($(".answer")[1]).html(questions[random][2]);
        $($(".answer")[2]).html(questions[random][3]);
        $($(".answer")[3]).html(questions[random][4]);
        $(".answer").fitText()
        complete.push(random);
    }, 1000);
});
$(".ending-button").click(function() {
    $(".start-page").hide();
    $(".genres").show();
    $(".leaderboard-games").hide();
    $(".ending").show();
});
$(".games-button").click(function() {
    $(".leaderboard-games").show();
    $(".genres").hide();
});

$(".games-button").click(function() {
    $(".leaderboard-games").show();
    $(".genres").hide();
});


$(".back").click(function() {
    $(".start-page").show();
    $(".questionnaire").hide();
    $(".ending").hide();
    $(".loading").hide();
    $(".leaderboard-games").hide();
    $(".save").hide();
})

list = ["1", "2", "3", "4"];
$(document).ready(function() {
    for (i=0;i<list.length; i++) {
        $("#" + list[i]).click(function() {
            chosen($(this).attr("id"));
        });
    };
});
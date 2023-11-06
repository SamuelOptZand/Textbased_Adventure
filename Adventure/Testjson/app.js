var rls = require('readline-sync');

var GameState = true;

while (GameState == true) {
    //run bullshit
    //StartGame();
    Route1();
}

function StartGame() {
    console.log("Welcome to my game");
    console.log("Before we begin, please maximize the console window!\n\n");
    let GameStartPick = ["start", "quit"];
    let GameStartChoice = rls.keyInSelect(GameStartPick, "", { cancel: false });

    switch (GameStartChoice) {
        case 0:
            console.clear();
            Route0();
            break;
        case 1:
            console.log("goodbye!");
            GameState = false;
            break;
    }
}

function Route0() { //start
    console.log("You are late for your train.\nYou run onto the station and see a train leave. what will you do?\n\n[CHOICES]");
    let Route0Pick = ["check if that train is infact the one you need", "jump into the train"];
    let Route0Choice = rls.keyInSelect(Route0Pick, "", { cancel: false });

    switch (Route0Choice) {
        case 0:             //-> route 1
            console.clear(); 
            Route1();
            break;
        case 1:             //-> route 2
            console.clear();
            Route2();
            break;
    }
}

function Route1() { //route 1
    console.log("You think it is better to check if it's the correct train.\nYou get your phone out of your pocket and look what train you need.\nUpon looking you see that your train has already left 5 minutes ago, the next train will come over 3 hours.\n What will you do to pass the time?\n");
    let Route1Pick = ["sleep", "stare at a wall", "look around"];
    let Route1Choice = rls.keyInSelect(Route1Pick, "", { cancel: false });
    switch (Route1Choice) {
        case 0:
            console.clear();
            Route1S();      //-> route 1 sleep 1S
            break;
        case 1:
            console.clear();
            Route1W();      //-> route 1 stare at wall 1W
            break;
        case 2:
            console.clear();
            Route1L();      //-> route 1 look around 1L
            break;
    }
}

function Route1S() {
    console.log("You decide that is a good idea to sleep.\nWhere are you going to sleep?");
    let Route1SPick = ["Sleep on the ground", "Find the nearest homeless person and beat them up to take their place", "Maybe don't sleep"];
    let Route1SChoice = rls.keyInSelect(Route1SPick, "", { cancel: false });
    switch (Route1SChoice) {
        case 0:
            console.clear();
            Route1SG();     //-> route 1 sleep on ground 1SG
            break;
        case 1:
            console.clear();
            Route1SF();     //-> route 1 fight 1SF
            break;
        case 2:
            console.clear();
            Route1();      //-> back to route 1
            break;
    }
}

{
    function Route1W() {
        console.log("You walk over to the nearest wall and stare at it.\n\nIt is not that interesting.");
        let Route1WPick = ["Continue staring", "Do something else"];
        let Route1WChoice = rls.keyInSelect(Route1WPick, "", { cancel: false })
        switch (Route1WChoice) {
            case 0:
                console.clear();
                Route1W1();     //-> to route 1W1
                break;
            case 1:
                console.clear();
                Route1();       //-> back to route 1
                break;
        }
    }

    function Route1W1() {
        console.log("You sit down and continue stare.\nThe white wall isn't that interesting.");
        let Route1W1Pick = ["continue to stare", "get up"];
        let Route1W1Choice = rls.keyInSelect(Route1W1Pick, "", { cancel: false });
        switch (Route1W1Choice) {
            case 0:
                console.clear();
                Route1W2();     //-> to route 1W2
                break;
            case 1:
                console.clear();
                Route1();       //-> back to route 1
                break;
        }
    }

    function Route1W2() {
        console.log("You continue to stare and notice some small details.\nSmall cracks, chipped of paint and other imperfections");
        let Route1W2Pick = ["Stare", "get up"];
        let Route1W2Choice = rls.keyInSelect(Route1W2Pick, "", { cancel: false });
        switch (Route1W2Choice) {
            case 0:
                console.clear();
                Route1W3();
                break;
            case 1:
                console.clear();
                Route1();
                break;
        }
    }

    function Route1W3() {
        console.log("Completly captivated by the wall you keep on staring.\nYou the wall moving closer almost like it is going to swallow you.");
        let Route1W3Pick = ["Stare"];
        let Route1W3Choice = rls.keyInSelect(Route1W3Pick, "", { cancel: false });
        switch (Route1W3Choice) {
            case 0:
                console.clear();
                Route1W4();
                break;
        }
    }

    function Route1W4() {
        console.log("");
        let Route1W4Pick = [""];
        let Route1W4Choice = rls.keyInSelect(Route1W4Pick, "", { cancel: false });
        switch (Route1W4Choice) {
            case 0:
                console.clear();

                break;
        }
    }
} //route 1 W
function Route1L() {
    console.log("You look around the train station.");
    let Route1LPick = ["",""];
    let Route1LChoice = rls.keyInSelect(Route1LPick, "", { cancel: false });
    switch (Route1LChoice) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    }
}

function Route1LF() {
    console.log("");
    let Route1LFPick = ["",""];
    let Route1LFChoice = rls.keyInSelect(Route1LFPick, "", { cancel: false });
    switch (Route1LFChoice) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    }
}

function Route1SG() {
    console.log("");
    let Route1LFPick = ["", ""];
    let Route1LFChoice = rls.keyInSelect(Route1LFPick, "", { cancel: false });
    switch (Route1LFChoice) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    }
}
function Route2() {
    console.clear();
    console.log("You start sprinting and jump into the train just before the doors close.\nYou find a place to sit  and take your time to catch your breath.\n\nBut then you realize...\n\n");
    rls.question("Press enter to continue");
    console.clear();
    console.log("..........\n\nYOU ARE IN THE WRONG TRAIN!\nYour heart sinks and you start to feel panicked.\n\n");
    rls.question("Press enter to calm down");
    console.clear();
    console.log("You calm yourself down.\nWhat are you going to do?")
    let Route2Pick = ["Get out at the next stop","See where the train ends up"];
    let Route2Choice = rls.keyInSelect(Route2Pick, "", { cancel: false });
    switch (Route2Choice) {
        case 0:
            console.clear();
            Route2G();      //-> route 2 get out 2G
            break;
        case 1:
            console.clear();
            Route2S();      //-> route 2 stay in train 2S
            break;
    }
}
function Route2G() {
    console.log("You got off at the next stop.\nYou reconize nothing and have no clue where you are.\n");
    let Route2GPick = ["Just start walking", "Check schedule"];
    let Route2GChoice = rls.keyInSelect(Route2GPick, "", { cancel: false });
    switch (Route2GChoice) {
        case 0:
            console.clear();
            Route2GW();     //-> route 2 walking 2GW
            break;
        case 1:
            console.clear();
            console.log("You check your phone to see if there will be a train that goes to the station you need to go to.\n");
            rls.question("Press enter to continue");
            console.clear();
            console.log(".........\nNo train will go where you need to go.\n\n");
            rls.question("Press enter to check if any train goes anywhere");
            console.clear();
            console.log("That was the last train\n\n\n\"I'm fucked\"");
            rls.question("Press enter to continue");
            Route2G2();
            break;
    }
}

function Route2G2() {       //  route 2 G without option B
    console.log("You got off at the next stop.\nYou reconize nothing and have no clue where you are.\n");
    let Route2GPick = ["Just start walking"];
    let Route2GChoice = rls.keyInSelect(Route2GPick, "", { cancel: false });
    switch (Route2GChoice) {
        case 0:
            console.clear();
            Route2GW();     //-> route 2 walking 2GW
            break;
    }
}

function Route2GW() {
    console.log("You start walking in a random direction.\nYou relalize you are completely lost.");
    rls.question("ENDING 1/4\nLost");
}













//function Route1LF() {
//    console.log("");
//    let Route1LFPick = [];
//    let Route1LFChoice = rls.keyInSelect(Route1LFPick, "", { cancel: false });
//    switch (Route1LFChoice) {
//        case 0:
//            break;
//        case 1:
//            break;
//        case 2:
//            break;

//    }
//}
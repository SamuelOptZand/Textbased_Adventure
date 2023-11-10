var rls = require('readline-sync');

var GameState = true;

while (GameState == true) {
    //run bullshit
    //StartGame();
    Route1SF();
}

function StartGame() {
    console.clear();
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
    let Route1SPick = ["Sleep on the ground", "Find the nearest homeless person and beat them up to take their bench", "Maybe don't sleep"];
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
function Route1SF() {
    BattleHomelessMan();
    function BattleHomelessMan() {
        var PlayerHP = 100;
        var PlayerATK = 10;
        var HomelessManHP = 100;
        var HomelessManATK = 10;

        console.clear();

        while (HomelessManHP >= 0) {
            if (PlayerHP <= 0) {
                console.log("You lose");
                Ending3();
            }
            else {
                console.log("Your HP: " + PlayerHP);
                console.log("Homeless man's HP: " + HomelessManHP + "\n");
                let FightOptions = ["Attack", "Block", "Health potion", "Run"];
                let FightPick = rls.keyInSelect(FightOptions, "", { cancel: false });

                switch (FightPick) {
                    case 0:
                        console.clear();
                        console.log("You attack the homeless man and deal 10 damage");
                        HomelessManHP = HomelessManHP - PlayerATK;
                        console.log("The homeless man attacks and deals 10 damage\n\n");
                        PlayerHP = PlayerHP - HomelessManATK;
                        break;

                    case 1:
                        console.clear();
                        console.log("You brace yourself for the on comming attack\n You block!");
                        break;

                    case 2:
                        console.clear();
                        console.log("You drink a potion to heal yourself");
                        PlayerHP += 20;
                        console.log("Your health: " + PlayerHP + "\n");
                        console.log("The homeless man attacks and deals 10 damage");
                        PlayerHP -= HomelessManATK;
                        console.log("Your health: " + PlayerHP + "\n");
                        break;
                    case 3:
                        console.clear();
                        console.log("You run away to safety.\n");
                        rls.question("Press enter to continue");
                        Route1();
                        
                        break;
                }
            }
        }
        console.clear();
        console.log("You win!");
        rls.question("Press enter to continue");
        console.clear();
        console.log("You have defeated the homeless man and take his bench.\nYou lay down on the bench.");
        rls.question("Press enter to continue");
        console.clear();
        Ending2();
        
    }
}

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
    }//moet nog

function Route1L() {
    console.log("You look around the train station.\nIt looks like any other train station.");
    let Route1LPick = ["Keep on looking","Stop looking"];
    let Route1LChoice = rls.keyInSelect(Route1LPick, "", { cancel: false });
    switch (Route1LChoice) {
        case 0:
            console.clear();
            Route1LK();
            break;
        case 1:
            console.clear();
            Route1();
            break;
    }
}


function Route1LK() { //moet nog
    console.log("You roam around the station aimlessly.\nTaking in your suroundings.\nEverything looks the same and at the same time doesn't.");
    let Route1LKPick = ["Explore further","Find your way back"];
    let Route1LKChoice = rls.keyInSelect(Route1LKPick, "", { cancel: false });
    switch (Route1LKChoice) {
        case 0:
            console.clear();
            Route1LKF();
            break;
        case 1:
            console.clear();
            Route1();
            break;
    }
}


function Route1SG() {
    console.log("You lay down.");   
    let Route1SGPick = ["Sleep", "Maybe don't sleep on the ground"];
    let Route1SGChoice = rls.keyInSelect(Route1SGPick, "", { cancel: false });
    switch (Route1SGChoice) {
        case 0:             
            console.clear();
            Ending2();      //-> sleep on ground, triggers ending 2
            break;
        case 1:
            console.clear();
            console.log("You get up");
            Route1();       //-> go back to route 1 
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
            Ending1(); //-> ending 1 lost
            break;
        case 1:
            console.clear();
            console.log("You check your phone to see if there will be a train that goes to the station you need to go to.\n");
            rls.question("Press enter to continue");
            console.clear();
            console.log(".........\nNo train will go where you need to go.\n\n");
            rls.question("Press enter to check if any train goes anywhere");
            console.clear();
            console.log("That was the last train\n\n\n\"I'm fucked\n");
            rls.question("Press enter to continue");
            Route2G2();     //-> route 2G2 same as this route but without the 2nd option
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
            Ending1();     //-> to ending 1
            break;
    }
}

function Route2S() {
    console.log("You sit in the train awaiting the final destination.\n");
    rls.question("Press enter to pass time");
    console.clear();
    console.log("You still aren't there yet.\n");
    rls.question("Press enter to pass time");
    console.clear();
    console.log("You finaly arive at the end destination.\nYou get out of the train and start to realize that this was bad idea.\n");
    rls.question("Press enter to walk");
    console.clear();
    Ending1();
}

function Ending1() { 
    console.log("You start walking in a random direction.\nYou realize you are completely lost.");
    rls.question("ENDING 1/4\nLost\n\n\nPress enter to continue");
    GameEnd();
} //lost

function Ending2() {
    console.log("You lay there and close your eyes.\nYou fall asleep...");
    rls.question("Press enter to wake up.");
    console.clear();
    rls.question("Press enter to check the time.");
    console.clear();
    console.log("You check the time and see it is already time to go to work.\n");
    console.log("ENDING 2/4 THE CYCLE CONTINUES\n\n\n");
    rls.question("Press enter to go to work.");
    console.clear();
    rls.question("Press enter to work");
    console.clear();
    Route0();
} //eepy

function Ending3() {
    console.log("You fall to the ground defeated and die.\nThe homeless man spits on your corpse and goes back to his bench.\n\n");
    rls.question("ENDING 3/4 DEATH\n\n\nPress enter to coninue");
    GameEnd();
} //death

function Ending4() {
    GameEnd();
} //insanity

function GameEnd() {
    console.clear();
    rls.question("Press enter to quit");
    GameState = false;
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
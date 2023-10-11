var rls = require('readline-sync'),
    index = 0;
const data = require("./data.json");

    printer(array) {
        console.clear;

        for (let i = 0; i <= 29; i++) {
            var Line = array[i];
            Line = Line.replace("@@", " [");
            console.log(Line);

            switch (key) {
                case "w":
                    break;

                case "s":

                    break;

                default:
            }
    }

    switch (key) {
        case "w":
            break;

        case "s":

            break;

        default:

    }
    
    printer(data[index].Name);
    key = rls.keyIn();
   

